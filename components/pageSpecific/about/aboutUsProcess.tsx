import { AboutUsProcessItem, processSteps } from '#/data/content/aboutUs/processContent'
import React from 'react'


interface AboutUsProcessProps {

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
