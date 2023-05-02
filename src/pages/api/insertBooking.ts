import type { NextApiRequest, NextApiResponse } from 'next';
import { calendar_v3, google } from 'googleapis';
import dayjs, { Dayjs } from 'dayjs';
import { PrismaClient } from '@prisma/client';

import { Asserts } from 'yup';

import bookingFormSchema from '@/utils/bookingFormSchema';

type Data = {
    message: any;
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

    if (req.method === 'GET') {
        res.status(123).end();
    }

    if (req.method === 'POST') {
        const validated = await bookingFormSchema
            .validate(req.body)
            .catch((err) => {
                console.log('VALIDATION FAILED: %s', err);
                res.status(400).json({
                    message: { error: 'VALIDATION FAILED', value: err }
                });
                res.end();
                throw new Error('ERROR: Validation failed: %s', err);
            });

        const { datetime } = validated;
        const endtime = addCleanTime(datetime);

        const desc = makeDesc(validated);
        console.log(desc);

        const event: calendar_v3.Schema$Event = {
            summary: validated.name,
            location: validated.location,
            description: desc,
            start: {
                dateTime: datetime,
                timeZone: 'Europe/Athens'
            },
            end: {
                dateTime: endtime,
                timeZone: 'Europe/Athens'
            }
        };
        calendar.events.insert(
            {
                auth: auth,
                calendarId: 'glowkingath@gmail.com',
                requestBody: event
            },
            function (err: any) {
                if (err) {
                    console.log(
                        'There was an error contacting the Calendar service: ' +
                            err
                    );

                    return res.status(500).end({
                        message: {
                            error: 'error with calendar service',
                            value: err
                        }
                    });
                }
            }
        );
        // insert event into database
        // send confirmation emails
        if (validated.email) {
            sendConfirmationEmails(validated, endtime);
        }
        return res.status(200).end({ message: 'success' });
    }
    return res.status(200).end({ message: 'success' });
}
interface EmailArgs extends Asserts<typeof bookingFormSchema> {}

const sendConfirmationEmails = (data: EmailArgs, endtime: string) => {
    const { extras, datetime, name, phone, email, location, messageBody } =
        data;

    if (!process.env['SENDGRID_API_KEY']) {
        throw new Error('ERROR: ENV Var: SENDGRID_KEY not found!');
    }
    const msgToGlowking = {
        to: 'glowkingath@gmail.com',
        from: 'contact@glowking.gr',
        subject: 'Booking Confirmation',
        text: `Name: ${name} \nEmail: ${email} \nPhone:${phone} \nHas made a booking confirmation for ${datetime} until ${endtime}\nLocation: ${location}. `,
        html: `Name: ${name} <br>Email: ${email} <br>Has made a booking confirmation for ${datetime} - ${endtime}. <br> Location: ${location}</a>`
    };

    const msgToCustomer = {
        to: email,
        from: 'contact@glowking.gr',
        subject: 'Booking Confirmation',
        text: `Name: ${name} \nEmail: ${email} \nPhone:${phone} \nHas made a booking confirmation for ${datetime} until ${endtime}\nLocation: ${location}. `,
        html: `Name: ${name} <br>Email: ${email} <br>Has made a booking confirmation for ${datetime} - ${endtime}. <br> Location: ${location}</a>`
    };

    const mailer = require('@sendgrid/mail');
    mailer.setApiKey(process.env['SENDGRID_API_KEY']);

    mailer
        .send(msgToGlowking)
        .then(() => {
            console.log('Customer Email sent');
        })
        .catch((error: any) => {
            console.error('Glowking Email failed:', error);
        });

    mailer
        .send(msgToCustomer)
        .then(() => {
            console.log('Customer Email sent');
        })
        .catch((error: any) => {
            console.error('Customer Email failed:', error);
        });
};

//interface Booking extends Asserts<typeof bookingFormSchema> {}

//const insertBookingDB = async (data: Booking) => {
//    const prisma = new PrismaClient();
//
//    const {
//        category,
//        subtype,
//        extras,
//        datetime,
//        name,
//        phone,
//        email,
//        location,
//        messageBody
//    } = data;
//
//    const res = await prisma.$queryRaw`
//     INSERT INTO Booking
//                 name, email, phone,
//                 location, messageBody,
//                 starttime, endtime,
//                 subtype, package, category
//VALUES ${name}, ${email}, ${phone},
//${location}, ${messageBody},
//${starttime}, ${endtime},
//${subtype}, ${packageId}
//`
//};

const makeDesc = (data: any) => {
    return JSON.stringify({ ...data }, null, 2);
};
const addCleanTime = (datetime: string) => {
    // add the cleaning time
    // currently is a single hour and a half addition
    // at some pointn add the datetime parsed amount
    // eg '2023-03-21T20:00:00';
    const [day, time] = datetime.split('T');
    const [oldHour, oldMin, _] = time.split(':');

    const newHour =
        oldMin === '30' ? parseInt(oldHour) + 2 : parseInt(oldHour) + 1;
    const newMin = oldMin === '30' ? '00' : '30';

    const hourStr = newHour < 10 ? '0' + newHour : '' + newHour;

    const endDatetime = `${day}T${hourStr}:${newMin}:00`;
    return endDatetime;
};
