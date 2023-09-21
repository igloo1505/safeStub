import Image from "next/image"
import onlinePayment from "#/public/assets/illustrations/onlinePayment.svg"
import tickets from "#/public/assets/illustrations/tickets.svg"
import secureAuth from "#/public/assets/illustrations/secureAuth.svg"
import gameDay from "#/public/assets/illustrations/gameday.svg"


export interface AboutUsProcessItem {
    title: string
    body: string
    children: React.ReactNode
}


const iconClasses = "h-[200px] w-auto"

export const processSteps: AboutUsProcessItem[] = [
    {
        title: "Create an account and authenticate your identity",
        body: "To start using SafeStub, you'll need to create an account and authenticate your identity. This helps to protect both buyers and sellers from fraud. You can authenticate your identity by providing...",
        children: <Image className={iconClasses} src={secureAuth} alt="Secure" />
    },
    {
        title: "Search and find ticket events",
        body: "Once you've created an account and authenticated your identity, you can start searching for events. You can search by event name, date, location",
        children: <Image className={iconClasses} src={onlinePayment} alt="Online Payment" />
    },
    {
        title: "Purchase",
        body: "Nulla faucibus sed metus consectetur efficitur nullam, laoreet tempor bibendum arcu vel porttitor dignissim ac, tempor sit fusce. Sit ligula neque lorem vulputate lacus eros magna sit imperdiet montes ultrices.",
        children: <Image className={iconClasses} src={tickets} alt="Online Payment" />
    },
    {
        title: "Do stuff",
        body: "Dookie dookie faucibus sed metus consectetur efficitur nullam, laoreet tempor bibendum arcu vel porttitor dignissim ac, tempor sit fusce. Sit ligula neque lorem vulputate lacus eros magna sit imperdiet montes ultrices.",
        children: <Image className={iconClasses} src={gameDay} alt="Game Day" />
    },
]
