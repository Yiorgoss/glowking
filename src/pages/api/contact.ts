import type { NextApiRequest, NextApiResponse } from "next"

const sgMail = require('@sendgrid/mail');

type ResData = {
    isEmailSent: boolean
}


export default function submitForm(
    //TODO: enable logging
    req: NextApiRequest,
    res: NextApiResponse<ResData>

) {
    const body = req.body

    sgMail.setApiKey(process.env.SENDGRID_API_KEY);
    const msg = {
        to: 'makridakisyiorgos@gmail.com',
        from: 'yiorgos.backup@gmail.com', // Use the email address or domain you verified above
        subject: 'Sending with Twilio SendGrid is Fun',
        text: 'and easy to do anywhere, even with Node.js',
        html: '<strong>and easy to do anywhere, even with Node.js</strong>',
    };
    //ES6
    sgMail
        .send(msg)
        .then(() => { }, error => {
            console.error(error);

            if (error.response) {
                console.error(error.response.body)
            }
        });
    //ES8
//    (async () => {
//        try {
//            await sgMail.send(msg);
//        } catch (error) {
//            console.error(error);
//
//            if (error.response) {
//                console.error(error.response.body)
//            }
//        }
//    })();
    res.status(200).json({"check":"support ticket"})

}
