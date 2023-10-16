import { Ticket } from '@prisma/client'
import React from 'react'
import { Label } from '../ui/label'
import clsx from 'clsx'

interface SatisfiesTicket {
    section: string
    seat: string
    row: string
}

interface TicketCardItemProps {
    ticket: Ticket | SatisfiesTicket
    useScreen?: boolean
    className?: string
}

const TicketCardItem = ({ ticket, useScreen, className }: TicketCardItemProps) => {
    return (
        <div className={clsx("w-full h-fit flex flex-col justify-start items-start gap-2 border border-border px-3 py-2", useScreen ? "xxs:grid xxs:grid-cols-[1fr_1fr_1fr] xxs:gap-4 min-w-[min(250px,90vw)]" : "@[250px]:grid @[250px]:grid-cols-[1fr_1fr_1fr] @[250px]:gap-4", className && className)}>
            <div className={clsx("w-full h-fit grid grid-cols-[60px_1fr] justify-start items-center gap-3 ", useScreen ? "xxs:flex xxs:flex-col xxs:items-start xxs:gap-0" : "@[250px]:flex @[250px]:flex-col @[250px]:items-start @[250px]:gap-0")}>
                <Label className={clsx("text-muted-foreground text-end", useScreen ? "xxs:text-start" : "@[250px]:text-start")}>
                    Section
                </Label>
                <div className={"pl-3"}>{ticket.section}</div>
            </div>
            <div className={clsx("w-full h-fit grid grid-cols-[60px_1fr] justify-start items-center gap-3 ", useScreen ? "xxs:flex xxs:flex-col xxs:items-start xxs:gap-0" : "@[250px]:flex @[250px]:flex-col @[250px]:items-start @[250px]:gap-0")}>
                <Label className={clsx("text-muted-foreground text-end", useScreen ? "xxs:text-start" : "@[250px]:text-start")}>
                    Row
                </Label>
                <div className={"pl-3"}>{ticket.row}</div>
            </div>
            <div className={clsx("w-full h-fit grid grid-cols-[60px_1fr] justify-start items-center gap-3 ", useScreen ? "xxs:flex xxs:flex-col xxs:items-start xxs:gap-0" : "@[250px]:flex @[250px]:flex-col @[250px]:items-start @[250px]:gap-0")}>
                <Label className={clsx("text-muted-foreground text-end", useScreen ? "xxs:text-start" : "@[250px]:text-start")}>
                    Seat
                </Label>
                <div className={"pl-3"}>{ticket.seat}</div>
            </div>
        </div>
    )
}


TicketCardItem.displayName = "TicketCardItem"


export default TicketCardItem;
