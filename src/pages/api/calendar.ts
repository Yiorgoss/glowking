import type { NextApiRequest, NextApiResponse } from 'next';
import { calendar_v3, google } from 'googleapis';

type Data = {
    bookingsHMap: String;
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

    events.forEach((event) => {
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
    phone?: string;
    email: string;
    startTime?: string;
    location?: string;
    eventLink?: string;
    error?: string;
}) => {
    const sgMail = require('@sendgrid/mail');
    const msgToGlowking = {
        to: 'glowkingath@gmail.com',
        from: 'contact@glowking.gr',
        subject: 'Booking Confirmation',
        text: `Name: ${name} \nEmail: ${email} \nPhone:${phone} \nHas made a booking confirmation for ${startTime}. \nThe event can be viewed: ${eventLink}`,
        html: `Name: ${name} <br>Email: ${email} <br>Has made a booking confirmation for ${startTime}. <br>The event can be viewed: <a href='${eventLink}'>Here</a>`
    };
    const msgToCustomer = {
        to: email,
        from: 'contact@glowking.gr',
        subject: 'Booking Confirmation',
        text: `Thank you for booking with us, this is an automated email to confirm. \nTime: ${startTime} \nLocation Of Clean: ${location} \nIf these details are incorrect or if you did not book an appointment from our website (glowking.gr), please contact us immediately at glowkingath@gmail.com or 698 000 0015.`,
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
        .send(msgToCustomer)
        .then(() => {
            console.log('Email to customer sent');
            sgMail
                .send(msgToGlowking)
                .then(() => {
                    console.log('Email to Glowking sent');
                    return 1;
                })
                .catch((error) => {
                    console.error(error);
                    return -1;
                });
        })
        .catch((error) => {
            console.error(error);
            sgMail
                .send(failureMsgToGlowking)
                .then(() => {
                    console.log('Failure Email sent');
                    return -1;
                })
                .catch((error) => {
                    console.log('Failure Email Failed: %s', error);
                });
            return -1;
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

    const eventHMap = createBookedTimetable(events);

    if (req.method === 'GET') {
        res.json({
            bookingsHMap: JSON.stringify(eventHMap)
        });
    }
    if (req.method === 'POST') {
        //const { name, phone, email, time, location } = req.body;
        const name = 'test_6';
        const phone = '123456';
        const email = 'makridakisyiorgos@gmail.com';
        const time = '2023-03-23T08:30:00';
        const location = 'abc';
        if (eventHMap[time] !== undefined) {
            return res.status(409);
        }

        const endTime = calculateEndTime(time);
        const description = `number: ${phone}\nemail: ${email}`;
        let eventLink = '';
        const event = {
            summary: name,
            location: location,
            description: description,
            start: {
                dateTime: time,
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
                    sendEmails({ name, email, error: err });
                    return;
                }
                console.log('Event created: %s', event.data.htmlLink);
                eventLink = event.data.htmlLink;
                sendEmails({
                    name,
                    phone,
                    email,
                    startTime: time,
                    location,
                    eventLink
                });
            }
        );
    }
}
