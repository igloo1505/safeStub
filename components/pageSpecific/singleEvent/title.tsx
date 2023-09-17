import { formatDateLong } from '#/lib/formatting/dates'
import { SingleEventReturned } from '#/types/query'
import React from 'react'



interface SingleEventTitleBarProps {
    event: SingleEventReturned
}

const SingleEventTitleBar = ({ event }: SingleEventTitleBarProps) => {
    return (
        <div className={"w-full h-fit text-foreground"}>
            <div className={"w-full h-fit flex flex-col justify-start items-start gap-2"}>
                <h3 className={"font-bold text-2xl text-foreground text-center md:text-start"}>{event?.description.replace("at", "vs")}</h3>
                <div className={"w-full text-foreground/80 text-sm md:text-base text-center md:text-start"}>
                    {formatDateLong(event?.date)}
                </div>
                {event?.arena && <div className={"w-full text-sm md:text-base text-foreground/80 text-center md:text-start"}>{`${event?.arena.name}, ${event.arena.location.city}, ${event.arena.location.state || ""} 'Merica`}</div>}
            </div>
        </div>
    )
}


SingleEventTitleBar.displayName = "SingleEventTitleBar"


export default SingleEventTitleBar;
