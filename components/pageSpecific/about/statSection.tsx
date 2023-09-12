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
                value={"100k"}
                text={"Pellentesque dolor urna eu nibh sem porta, est efficitur suspendisse vivamus dictum sem diam porta."}
            />
            <AboutUsStat
                value={<div className={"flex flex-row justify-start items-center"}>
                    <StarIcon className="w-auto h-[40px]" />
                    <StarIcon className="w-auto h-[40px]" />
                    <StarIcon className="w-auto h-[40px]" />
                    <StarIcon className="w-auto h-[40px]" />
                    <StarHalfIcon className="w-auto h-[40px]" />
                </div>}
                text={"Pellentesque dolor urna eu nibh sem porta, est efficitur suspendisse vivamus dictum sem diam porta."}
            />
            <AboutUsStat
                value={"9/10"}
                text={"Pellentesque dolor urna eu nibh sem porta, est efficitur suspendisse vivamus dictum sem diam porta."}
            />
        </div>
    )
}


AboutUsStats.displayName = "AboutUsStats"


export default AboutUsStats;
