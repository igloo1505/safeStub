import { AboutUsProcessItem } from '#/data/content/aboutUs/processContent'
import data from '#/data/content/aboutUs/processContent.json'
import React from 'react'
import Image from "next/image"
import onlinePayment from "#/public/assets/illustrations/onlinePayment.svg"
import tickets from "#/public/assets/illustrations/tickets.svg"
import secureAuth from "#/public/assets/illustrations/secureAuth.svg"
import gameDay from "#/public/assets/illustrations/gameday.svg"

const iconClasses = "h-[200px] w-auto"

const icons = [
    <Image key={`process-item-1`} className={iconClasses} src={secureAuth} alt="Secure" />,
    <Image key={`process-item-2`} className={iconClasses} src={onlinePayment} alt="Online Payment" />,
    <Image key={`process-item-3`} className={iconClasses} src={tickets} alt="Online Payment" />,
    <Image key={`process-item-4`} className={iconClasses} src={gameDay} alt="Game Day" />
]


const AboutUsProcessItem = ({ body, index, title }: AboutUsProcessItem) => {
    return (
        <div className={"grid grid-rows-[200px_auto_auto] gap-4 mt-8"}>
            <div className={"h-[200px] w-full grid place-items-center"}>{icons[index]}</div>
            <div className={"font-extrabold text-foreground text-lg"}>{title}</div>
            <div className={"font-thin"}>{body}</div>
        </div>
    )
}


const AboutUsProcess = () => {
    return (
        <div className={"w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 px-12 mt-8"}
        >
            {data.processSteps.map((s, i) => <AboutUsProcessItem {...s} index={i} key={`process-item-${i}`} />)}
        </div>
    )
}


AboutUsProcess.displayName = "AboutUsProcess"


export default AboutUsProcess;
