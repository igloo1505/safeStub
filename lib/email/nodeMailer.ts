import nodemailer from 'nodemailer'
import { MailOptions } from 'nodemailer/lib/smtp-transport';

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'admin@safestub.com',
        pass: 'ygnn slqz smbw knsa'
    }
});

export const testEmailTargets = [
    'aiglinski@icloud.com',
    'chasegoodwin16@gmail.com'
]

export const universalMailOptions: MailOptions = {
    from: 'admin@safestub.com',
};

export const sendTestEmail = async (options: Partial<MailOptions> = {}) => {
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
