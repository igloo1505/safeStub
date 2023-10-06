"use client"
import { formatUSD } from '#/lib/formatting/currency'
import React from 'react'
import { Button } from '#/components/ui/button'
import type { getFlattenedTickets } from '#/lib/formatting/util'
import type { serverClient } from '#/trpc/serverClient'
import Link from 'next/link'



interface TicketListItemProps {
    item: ReturnType<typeof getFlattenedTickets<NonNullable<Awaited<ReturnType<typeof serverClient.getEvent>>>>>[number]
}

const EventTicketListItem = ({ item }: TicketListItemProps) => {
    console.log("item: ", item)
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
            <div className={"px-4 h-full flex justify-center items-center"}>{formatUSD(item.transactionAvereragedCost)}</div>
            <Link href={`/listing/${item.transactionId}`}>
                <Button>Select</Button>
            </Link>
        </li>
    )
}


EventTicketListItem.displayName = "EventTicketListItem"


export default EventTicketListItem;
