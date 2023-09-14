import React from 'react'
import TicketQuantitySlider from './ticketQuantitySlider'
import EventTicketListItem from './TicketListItem'



interface EventSpecificTicketListProps {
}

export interface TicketFormattedForList {
    id: number
    section: number
    row: number
    price: number
}


const randomSections = [128, 112, 208, 302, 330, 146, 230]

const fakeTickets: TicketFormattedForList[] = [
    {
        id: 1,
        section: randomSections[Math.floor(Math.random() * randomSections.length)],
        row: 1,
        price: 100.0
    },
    {
        id: 1,
        section: randomSections[Math.floor(Math.random() * randomSections.length)],
        row: 1,
        price: 100.0
    },
    {
        id: 1,
        section: randomSections[Math.floor(Math.random() * randomSections.length)],
        row: 1,
        price: 100.0
    },
    {
        id: 1,
        section: randomSections[Math.floor(Math.random() * randomSections.length)],
        row: 1,
        price: 100.0
    },
    {
        id: 1,
        section: randomSections[Math.floor(Math.random() * randomSections.length)],
        row: 1,
        price: 100.0
    },
    {
        id: 1,
        section: randomSections[Math.floor(Math.random() * randomSections.length)],
        row: 1,
        price: 100.0
    },
    {
        id: 1,
        section: randomSections[Math.floor(Math.random() * randomSections.length)],
        row: 1,
        price: 100.0
    },
    {
        id: 1,
        section: randomSections[Math.floor(Math.random() * randomSections.length)],
        row: 1,
        price: 100.0
    },
    {
        id: 1,
        section: randomSections[Math.floor(Math.random() * randomSections.length)],
        row: 1,
        price: 100.0
    },
    {
        id: 1,
        section: randomSections[Math.floor(Math.random() * randomSections.length)],
        row: 1,
        price: 100.0
    },
    {
        id: 1,
        section: randomSections[Math.floor(Math.random() * randomSections.length)],
        row: 1,
        price: 100.0
    },
]



const EventSpecificTicketList = (props: EventSpecificTicketListProps) => {
    const tickets = fakeTickets
    return (
        <div className={"w-full flex flex-col justify-start items-center gap-6"}>
            <TicketQuantitySlider />
            <div className={"w-full h-full max-h-[300px] overflow-y-auto"}>
                <ul>
                    {tickets.map((t) => {
                        return <EventTicketListItem key={`ticket-${t.id}`} item={t} />
                    })}
                </ul>
            </div>
        </div>
    )
}


EventSpecificTicketList.displayName = "EventSpecificTicketList"


export default EventSpecificTicketList;
