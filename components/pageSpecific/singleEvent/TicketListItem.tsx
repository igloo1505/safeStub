"use client"
import { formatUSD } from '#/lib/formatting/currency'
import React from 'react'
import { TicketFormattedForList } from './ticketList'
import { Button } from '#/components/ui/button'



interface TicketListItemProps {
    item: TicketFormattedForList
}

const EventTicketListItem = ({ item }: TicketListItemProps) => {
    const svgId = "event-specific-seating-chart"
    const indicateSectionHover = () => {
        let svgEm = document.getElementById(svgId)
        let em = document.getElementById(`Section${item.section}`)
        if (!em || !svgEm) return
        svgEm.classList.add("focusSection")
        em.classList.add("indicateFocus")
    }

    const removeHover = () => {
        let svgEm = document.getElementById(svgId)
        let em = document.getElementById(`Section${item.section}`)
        svgEm?.classList.remove("focusSection")
        em?.classList.remove("indicateFocus")
    }
    return (
        <li className={"grid grid-cols-[1fr_auto_120px] px-4 py-4 place-items-center"} onMouseEnter={indicateSectionHover} onMouseLeave={removeHover}>
            <div className={"w-full flex flex-col justify-center items-start"}>
                <div className={""}>{`Section ${item.section}`}</div>
                <div className={""}>{`Row ${item.row}`}</div>
            </div>
            <div className={"px-4 h-full flex justify-center items-center"}>{formatUSD(item.price)}</div>
            <Button>Select</Button>
        </li>
    )
}


EventTicketListItem.displayName = "EventTicketListItem"


export default EventTicketListItem;
