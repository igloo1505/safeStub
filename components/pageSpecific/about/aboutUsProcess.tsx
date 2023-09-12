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
        title: "Step One",
        body: "Efficitur praesent lacus feugiat amet eu orci urna lectus consectetur pretium quisque massa pharetra varius praesent arcu dictum urna imperdiet.",
        children: <Image className={iconClasses} src={gameDay} alt="Game Day" />
    },

    {
        title: "Step Two",
        body: "Efficitur praesent lacus feugiat amet eu orci urna lectus consectetur pretium quisque massa pharetra varius praesent arcu dictum urna imperdiet.",
        children: <Image className={iconClasses} src={onlinePayment} alt="Online Payment" />
    },
    {
        title: "Step Three",
        body: "Efficitur praesent lacus feugiat amet eu orci urna lectus consectetur pretium quisque massa pharetra varius praesent arcu dictum urna imperdiet.",
        children: <Image className={iconClasses} src={tickets} alt="Online Payment" />
    },
]

const AboutUsProcess = (props: AboutUsProcessProps) => {
    return (
        <div className={"w-full grid gap-4 px-12 mt-8"}
            style={{
                gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))"
            }}
        >
            {processSteps.map((s, i) => <AboutUsProcessItem {...s} key={`process-item-${i}`} />)}
        </div>
    )
}


AboutUsProcess.displayName = "AboutUsProcess"


export default AboutUsProcess;
