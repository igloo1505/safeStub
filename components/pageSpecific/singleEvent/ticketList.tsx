"use client"
import React, { useEffect, useState } from 'react'
import TicketQuantitySlider from './ticketQuantitySlider'
import EventTicketListItem from './TicketListItem'
import { getFlattenedTickets } from '#/lib/formatting/util'
import { serverClient } from '#/trpc/serverClient'



interface EventSpecificTicketListProps {
    tickets: ReturnType<typeof getFlattenedTickets<NonNullable<Awaited<ReturnType<typeof serverClient.getEvent>>>>>
}

export interface TicketFormattedForList {
    id: number
    section: number
    row: number
    price: number
}



/* RESUME: Return here by using the slider to actually filter the list based on quantity passed in via ticketGroupQuantityMap */
const EventSpecificTicketList = ({ tickets }: EventSpecificTicketListProps) => {
    const [sliderStep, setSliderStep] = useState(1)
    const [filteredTickets, setFilteredTickets] = useState(tickets)
    useEffect(() => {
        setFilteredTickets(tickets.filter((t) => t.transactionNTickets >= sliderStep))
    }, [sliderStep])

    return (
        <div className={"w-full flex flex-col justify-start items-center gap-6"}>
            <TicketQuantitySlider sliderStep={sliderStep} setSliderStep={setSliderStep} />
            <div className={"w-full h-full max-h-[300px] overflow-y-auto"}>
                <ul>
                    {filteredTickets.map((t) => {
                        return <EventTicketListItem key={`ticket-${t.id}`} item={t} />
                    })}
                </ul>
            </div>
        </div>
    )
}


EventSpecificTicketList.displayName = "EventSpecificTicketList"


export default EventSpecificTicketList;
