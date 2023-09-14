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
                <h3 className={"font-bold text-2xl text-foreground"}>{event?.description.replace("at", "vs")}</h3>
                <div className={"text-foreground/80"}>
                    {formatDateLong(event?.date)}
                </div>
                {event?.arena && <div className={"text-foreground/80"}>{`${event?.arena.name}, ${event.arena.location.city}, ${event.arena.location.state || ""} 'Merica`}</div>}
            </div>
        </div>
    )
}


SingleEventTitleBar.displayName = "SingleEventTitleBar"


export default SingleEventTitleBar;
