import React from 'react'
import onlinePayment from "#/public/assets/illustrations/onlinePayment.svg"
import tickets from "#/public/assets/illustrations/tickets.svg"
import secureAuth from "#/public/assets/illustrations/secureAuth.svg"
import gameDay from "#/public/assets/illustrations/gameday.svg"
import Image from 'next/image'


interface AboutUsProcessProps {

}

interface AboutUsProcessItem {
    title: string
    body: string
    children: React.ReactNode
}


const AboutUsProcessItem = ({ children, body, title }: AboutUsProcessItem) => {
    return (
        <div className={"grid grid-rows-[200px_auto_auto] gap-4 mt-8"}>
            <div className={"h-[200px] w-full grid place-items-center"}>{children}</div>
            <div className={"font-extrabold text-foreground text-lg"}>{title}</div>
            <div className={"font-thin"}>{body}</div>
        </div>
    )
}

const iconClasses = "h-[200px] w-auto"

const processSteps: AboutUsProcessItem[] = [
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
        body: "Nulla faucibus sed metus consectetur efficitur nullam, laoreet tempor bibendum arcu vel porttitor dignissim ac, tempor sit fusce. Sit ligula neque lorem vulputate lacus eros magna sit imperdiet montes ultrices.",
        children: <Image className={iconClasses} src={gameDay} alt="Game Day" />
    },
]

const AboutUsProcess = (props: AboutUsProcessProps) => {
    return (
        <div className={"w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 px-12 mt-8"}
        >
            {processSteps.map((s, i) => <AboutUsProcessItem {...s} key={`process-item-${i}`} />)}
        </div>
    )
}


AboutUsProcess.displayName = "AboutUsProcess"


export default AboutUsProcess;
