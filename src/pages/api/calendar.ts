// @ts-nocheck

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

const createBookedTimetable = (
    events: calendar_v3.Schema$Event[]
): {
    [key: string]: {
        summary: string;
        location: string;
        desc: string;
        start: string;
    };
} => {
    const bookingsHMap = {};

    events
        .filter((event) => !!event!.start.dateTime)
        .forEach((event) => {
            bookingsHMap[event!.start.dateTime] = {
                summary: event.summary,
                start: event.start,
                desc: event.description,
                location: event.location
            };
        });

    return bookingsHMap;
};

const calculateEndTime = (time: string) => {
    // should always be between 0800 and 2000
    // eg '2023-03-21T20:00:00';
    const hourArr = time.split('T')[1].split(':');
    const minStr = hourArr[1];

    let hour = parseInt(hourArr[0]) + 1;
    let min = '';
    if (minStr == '30') {
        hour += 1;
        min = '00';
    }

    let hourStr = hour < 10 ? '0' + hour : '' + hour;

    const time2 = time.split('T')[0] + 'T' + hourStr + ':' + min + ':00';

    return time2;
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
    const [day, hour] = startTime.split('T');
    const sgMail = require('@sendgrid/mail');
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

    sgMail.setApiKey(process.env['SENDGRID_API_KEY']);
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
                    .catch((error) => {
                        console.error(error);
                    });
            }
        })
        .catch((error) => {
            console.error(error);
            sgMail
                .send(failureMsgToGlowking)
                .then(() => {
                    console.log('Failure Email sent');
                })
                .catch((error) => {
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
        throw new Error('ERROR: ENV Var not found!');
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
    }
    if (req.method === 'POST') {
        const { name, phone, email, datetime, location, messageBody } =
            await calendarSchema.validate(JSON.parse(req.body));
        //const parsedData = await calendarSchema
        //    .validate(JSON.parse(req.body))
        //    .catch((err) => {
        //        return res.status(400).json({
        //            error: { message: 'error validating input', value: err }
        //        });
        //    });

        console.log('datetime', datetime);
        if (!datetime)
            return res.status(500).json({
                error: { message: 'incorrect datetime', value: datetime }
            });
        if (eventHMap[datetime] !== undefined)
            return res
                .status(409)
                .json({ error: { message: 'datetime is already set' } });

        const endTime = calculateEndTime(datetime);
        const description = `number: ${phone}\n${messageBody}`;
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
            function (err, event) {
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
                    return res.status(500).json({
                        error: {
                            message: 'error with calendar service',
                            value: err
                        }
                    });
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

                console.log('Event created: %s', event.data.htmlLink);
                res.status(200);
            }
        );
    }
}
