import { Vonage } from '@vonage/server-sdk'


/// @ts-ignore
const vonage = new Vonage({
    apiKey: process.env.VONAGE_API_KEY!,
    apiSecret: process.env.VONAGE_API_SECRET!
}, {
    responseType: "json"
})


export const sendSMS = async ({ to, message }: { to: string, message: string }) => {
    const messageConfig = { to, from: process.env.SMS_FROM_NUMBER!, text: message }
    console.log("messageConfig: ", messageConfig)
    try {
        let res = await vonage.sms.send(messageConfig)
        console.log('Message sent successfully'); console.log(res);
        return res
    } catch (err) {
        console.log('There was an error sending the messages.');
        console.error(err)
        return err
    }
}

