import type { NextApiRequest, NextApiResponse } from 'next';
import { calendar_v3, google } from 'googleapis';

import calendarSchema from '@/utils/calendarSchema';

type Data = {
    bookedSlots?: String;
    error?: {
        message: string;
        value?: any;
    };
};

interface bookingType {
    [key: string]: {
        summary: string;
        location: string;
        desc: string;
        start: string;
    };
}

const makeDescription = ({
    name,
    phone,
    message,
    extras
}: {
    name: string;
    phone: number;
    message: string;
    extras: { name: string; price: number }[];
}) => {
    let extrasStr = '';
    let count = 0;
    extrasStr += `<ol>`;
    extras!.forEach(({ name, price }) => {
        extrasStr += `<li><b>${name}</b> - €${price}</li>`;
        count += price;
    });
    extrasStr += `</ol><br>`;

    const strObj = {
        name: name,
        phone: phone,
        messageBody: message ?? '',
        extras: extrasStr,
        count: count
    };
    let descStr = '';
    Object.entries(strObj).forEach(([key, value], i) => {
        descStr += `<b>${key}:</b> ${value}<br>`;
    });

    return descStr;
};
const createBookedTimetable = (
    events: calendar_v3.Schema$Event[]
): bookingType => {
    const bookingsHMap: bookingType = {};

    events
        .filter((event) => !!event.start?.dateTime)
        .forEach((event) => {
            bookingsHMap[(event.start?.dateTime || 'err').toString()] = {
                summary: event.summary ?? '',
                start: event.start?.dateTime || 'should never be undefined',
                desc: event.description ?? '',
                location: event.location ?? ''
            };
        });

    return bookingsHMap;
};

const calculateEndTime = (datetime: string) => {
    // should always be between 0800 and 2000
    // eg '2023-03-21T20:00:00';

    const [day, time] = datetime.split('T');
    const [oldHour, oldMin, _] = time.split(':');

    const newHour =
        oldMin === '30' ? parseInt(oldHour) + 2 : parseInt(oldHour) + 1;
    const newMin = oldMin === '30' ? '00' : '30';

    const hourStr = newHour < 10 ? '0' + newHour : '' + newHour;

    const endDatetime = `${day}T${hourStr}:${newMin}:00`;
    return endDatetime;
    //const minStr = hourArr[1];

    //let hour = parseInt(hourArr[0]) + 1;
    //console.log(hour, minStr);
    //console.log('^^^^^^^');
    //let min = '';
    //if (minStr == '30') {
    //    hour += 1;
    //    min = '00';
    //}

    //let hourStr = hour < 10 ? '0' + hour : '' + hour;
    //const time2 = time.split('T')[0] + 'T' + hourStr + ':' + min + ':00';

    //console.log(time2);
    //return time2;
};

const sendEmails = ({
    name,
    phone,
    email,
    startTime,
    location,
    eventLink,
    error
}: {
    name: string;
    phone?: number;
    email: string | undefined;
    startTime: string;
    location?: string;
    eventLink?: string;
    error?: string;
}) => {
    if (!process.env['SENDGRID_API_KEY']) {
        throw new Error('ERROR: ENV Var: SENDGRID_KEY not found!');
    }
    const [day, hour] = startTime.split('T');
    const msgToGlowking = {
        to: 'glowkingath@gmail.com',
        from: 'contact@glowking.gr',
        subject: 'Booking Confirmation',
        text: `Name: ${name} \nEmail: ${email} \nPhone:${phone} \nHas made a booking confirmation for ${day} ${hour}\nLocation: ${location}. \nThe event can be viewed: ${eventLink}`,
        html: `Name: ${name} <br>Email: ${email} <br>Has made a booking confirmation for ${day} ${hour}. <br>The event can be viewed: <a href='${eventLink}'>Here</a>`
    };
    const msgToCustomer = {
        to: email,
        from: 'contact@glowking.gr',
        subject: 'Booking Confirmation',
        text: `Thank you for booking with us, this is an automated email to confirm. \nTime: ${day} ${hour} \nLocation Of Clean: ${location} \nIf these details are incorrect or if you did not book an appointment from our website (glowking.gr), please contact us immediately at glowkingath@gmail.com or 698 000 0015.`,
        html: `Thank you for booking with us, this is an automated email to confirm. <br/>Time: ${startTime} <br/>Location Of Clean: ${location} <br/>If these details are incorrect or if you did not book an appointment from our website (glowking.gr), please contact us immediately at glowkingath@gmail.com or 698 000 0015. `
    };
    const failureMsgToGlowking = {
        to: 'glowkingath@gmail.com',
        from: 'contact@glowking.gr',
        subject: 'Booking Failure',
        text: `Problem arose when making a booking for \nName: ${name} \nEmail: ${email}, Please look into it.\n\nError:\n${error}`,
        html: `Problem arose when making a booking for ${email}, Please look into it. Booking was not made<br/><br/>Error:<br/>${error}`
    };

    const sgMail = require('@sendgrid/mail');
    //sgMail.setApiKey(process.env['SENDGRID_API_KEY']);

    sgMail.setApiKey(process.env['SENDGRID_API_KEY']);
    if (error) {
        sgMail.send(failureMsgToGlowking).then(() => {
            console.log('Event creation failure noted');
        });
        return;
    }
    sgMail
        .send(msgToGlowking)
        .then(() => {
            console.log('Email to Glowking sent');
            if (email) {
                sgMail
                    .send(msgToCustomer)
                    .then(() => {
                        console.log('Email to customer sent');
                    })
                    .catch((error: any) => {
                        console.error(error);
                    });
            }
        })
        .catch((error: any) => {
            console.error(error);
            sgMail
                .send(failureMsgToGlowking)
                .then(() => {
                    console.log('Failure Email sent');
                })
                .catch((error: any) => {
                    console.log('Failure Email Failed: %s', error);
                });
        });
};
export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    // load the environment variable with our keys
    const keysEnvVar = process.env['CREDS'];
    if (!keysEnvVar) {
        throw new Error('ERROR: ENV Var: GOOGLE_CREDENTIALS not found!');
    }
    const keys = JSON.parse(keysEnvVar);

    const auth = new google.auth.GoogleAuth({
        credentials: keys,
        scopes: ['https://www.googleapis.com/auth/calendar']
    });

    const calendar = google.calendar({ version: 'v3', auth });

    const eventListRes = await calendar.events.list({
        calendarId: 'glowkingath@gmail.com',
        timeMin: new Date().toISOString(),
        maxResults: 10,
        singleEvents: true,
        orderBy: 'startTime'
    });
    const events = eventListRes.data.items ?? [];

    //current limitation is that only one event per timeslot
    //TODO: convert bookingHMap into linked list
    const eventHMap = createBookedTimetable(events);

    if (req.method === 'GET') {
        //remove uneeded data
        const bookingEntries = Object.keys(eventHMap);

        res.status(200).json({
            bookedSlots: JSON.stringify(bookingEntries)
        });
        res.end();
    }
    if (req.method === 'POST') {
        const { name, phone, email, datetime, location, messageBody, extras } =
            await calendarSchema.validate(req.body).catch((err) => {
                console.log('VALIDATION FAILED: %s', err);
                res.status(400).json({
                    error: { message: 'VALIDATION FAILED', value: err }
                });
                res.end();
                throw new Error('ERROR: Validation failed: %s', err);
            });

  //      console.log('==============================');
  //      console.log('1-name', name);
  //      console.log('2-phone', phone);
  //      console.log('3-email', email);
  //      console.log('4-datetime', datetime);
  //      console.log('5-location', location);
  //      console.log('6-messageBody', messageBody);
  //      console.log('7-extras', extras);
  //      console.log('==============================');
        // const parsedData = await calendarSchema
        //    .validate(JSON.parse(req.body))
        //    .catch((err) => {
        //        return res.status(400).json({
        //            error: { message: 'error validating input', value: err }
        //        });
        //    });

        if (!datetime) {
            res.status(422).json({
                error: { message: 'incorrect datetime !!', value: datetime }
            });
            return res.end();
        }
        //uneeded for the time being
        //if (eventHMap[datetime] !== undefined) {
        //    console.log('booking time already confirmed');
        //    res.status(409).json({
        //        error: { message: 'datetime is already set' }
        //    });
        //    return res.end();
        //}
        const endTime = calculateEndTime(datetime);
        const description = makeDescription({
            name: name,
            phone: phone,
            message: messageBody ?? '',
            extras: extras ?? []
        });

        const event = {
            summary: name,
            location: location,
            description: description,
            start: {
                dateTime: datetime,
                timeZone: 'Europe/Athens'
            },
            end: {
                dateTime: endTime,
                timeZone: 'Europe/Athens'
            }
        };

        calendar.events.insert(
            {
                auth: auth,
                calendarId: 'glowkingath@gmail.com',
                requestBody: event
            },
            function (err: any, event: any) {
                if (err) {
                    console.log(
                        'There was an error contacting the Calendar service: ' +
                            err
                    );
                    sendEmails({
                        name,
                        email,
                        startTime: datetime,
                        error: err
                    });

                    res.status(500).json({
                        error: {
                            message: 'error with calendar service',
                            value: err
                        }
                    });
                    return res.end();
                }
                const eventLink = event.data.htmlLink;
                sendEmails({
                    name,
                    phone,
                    email,
                    startTime: datetime,
                    location,
                    eventLink
                });

                console.log('Event created: %s', eventLink);
                res.status(200);
                return res.end();
            }
        );
        res.status(200);
        return res.end();
    }
}
