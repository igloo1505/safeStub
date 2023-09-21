import DynamicIcon from '#/components/ui/dynamicIcon'
import clsx from 'clsx'
import { StarIcon, StarHalfIcon } from 'lucide-react'
import React from 'react'



interface AboutUsStatsProps {
    container?: string
}


interface AboutUsStatItem {
    text: React.ReactNode
    value: React.ReactNode
}


const AboutUsStat = (props: AboutUsStatItem) => {
    return (
        <div className={"grid grid-cols-1 grid-rows-[50px_1fr]"}>
            <div className={"text-4xl text-primary font-bold"}>{props.value}</div>
            <div className={""}>{props.text}</div>
        </div>
    )
}

const AboutUsStats = (props: AboutUsStatsProps) => {
    return (
        <div className={clsx("gap-4 mt-8 overflow-hidden", props.container && props.container)}>
            <AboutUsStat
                value={<div className={"flex flex-row gap-1 justify-start items-center"}>100% Guaranteed</div>}
                text={"We offer a money back guarantee on all purchases"}
            />
            <AboutUsStat
                value={"Convenience"}
                text={"You can find and buy tickets to events in seconds"}
            />
            <AboutUsStat
                value={"Fair Fees"}
                text={"We believe in transparent pricing and ensure our fees are reasonable, unlike the big guys."}
            />
        </div>
    )
}


AboutUsStats.displayName = "AboutUsStats"


export default AboutUsStats;
