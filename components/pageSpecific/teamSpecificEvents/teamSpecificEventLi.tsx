import React from 'react'
import { TeamSpecificEventsType } from './teamSpecificEventList'
import { dateAndTime, dayOfMonth, dayOfWeek, formatDateLongNoYear, timeOfDay } from '#/lib/formatting/dates'
import { Button } from '#/components/ui/button'
import clsx from 'clsx'



interface TeamSpecificEventLiProps {
    event: TeamSpecificEventsType[number]
    home: boolean
}

const TeamSpecificEventLi = ({ event, home }: TeamSpecificEventLiProps) => {
    const { day, dow, time } = dateAndTime(event.date)
    return (
        <li className={clsx("w-full grid grid-cols-1 grid-rows-[1fr_auto] sm:grid-rows-1 sm:grid-cols-[1fr_auto] px-4 py-4 md:gap-4 border border-border", home ? "group-[.state-away]/teamSpecific:hidden" : "group-[.state-home]/teamSpecific:hidden")}>
            <div className={"grid grid-cols-1 grid-rows-2 md:grid-rows-1 md:grid-cols-[200px_1fr]"}>
                <div className={"w-full h-full flex flex-col justify-center items-start"}>
                    <div className={"w-full flex items-start flex-row justify-between md:flex-col md:justify-center"}>
                        <div className={"font-semibold"}>
                            {event.title}
                        </div>
                        <div className={"flex"}>
                            {day}
                        </div>
                    </div>
                    <div className={"flex"}>
                        {`${dow} at ${time}`}
                    </div>
                </div>
                <div className={"w-full h-full text-sm md:text-base flex flex-col justify-center items-start"}>
                    <div className={""}>{event.description}</div>
                    <div className={""}>{`${event.arena.location.city}${event.arena.location.state || event.arena.location.country ? ", " : ""}${event.arena.location.state || event.arena.location.country || ""}`}</div>
                </div>
            </div>
            <div className={"my-2 md:my-0 grid grid-cols-2 gap-2 place-items-center md:gap-4 w-full h-full"}>
                <Button className={"w-full sm:w-fit"} disabled={event.tickets.length === 0}>Buy Tickets</Button>
                <Button className={"w-full sm:w-fit"}>Sell Tickets</Button>
            </div>
        </li>
    )
}


TeamSpecificEventLi.displayName = "TeamSpecificEventLi"


export default TeamSpecificEventLi;
