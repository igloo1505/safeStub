import nodemailer from 'nodemailer'
import { MailOptions } from 'nodemailer/lib/smtp-transport';

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'admin@safestub.com',
        pass: process.env.EMAIL_SMTP_APP_PASSWORD
    }
});

export const testEmailTargets = [
    'aiglinski@icloud.com',
    'chasegoodwin16@gmail.com'
]

export const universalMailOptions: MailOptions = {
    from: 'admin@safestub.com',
};

export const sendMail = async (options: Partial<MailOptions> = {}) => {
    console.log("options: ", options)
    return await new Promise((resolve, reject) => {
        transporter.sendMail({ ...universalMailOptions, ...options }, function(error, info) {
            if (error) {
                console.log("error")
                console.log(error);
                reject(error)
            } else {
                console.log('Email sent: ' + info.response);
                resolve(info)
                // do something useful
            }
        });
    })
}
