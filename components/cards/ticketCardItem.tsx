import { Ticket } from '@prisma/client'
import React from 'react'
import { Label } from '../ui/label'



interface TicketCardItemProps {
    ticket: Ticket
}

const TicketCardItem = ({ ticket }: TicketCardItemProps) => {
    return (
        <div className={"w-full h-fit flex flex-col justify-start items-start @[250px]:grid @[250px]:grid-cols-[1fr_1fr_1fr] gap-2 @[250px]:gap-0 border border-border px-3 py-2"}>
            <div className={"w-full h-fit grid grid-cols-[60px_1fr] @[250px]:flex @[250px]:flex-col justify-start items-center @[250px]:items-start gap-3 @[250px]:gap-0"}>
                <Label className={"text-muted-foreground text-end @[250px]:text-start"}>Section</Label>
                <div className={"pl-3"}>{ticket.section}</div>
            </div>
            <div className={"w-full h-fit grid grid-cols-[60px_1fr] @[250px]:flex @[250px]:flex-col justify-start items-center @[250px]:items-start gap-3 @[250px]:gap-0"}>
                <Label className={"text-muted-foreground text-end @[250px]:text-start"}>Row</Label>
                <div className={"pl-3"}>{ticket.row}</div>
            </div>
            <div className={"w-full h-fit grid grid-cols-[60px_1fr] @[250px]:flex @[250px]:flex-col justify-start items-center @[250px]:items-start gap-3 @[250px]:gap-0"}>
                <Label className={"text-muted-foreground text-end @[250px]:text-start"}>Seat</Label>
                <div className={"pl-3"}>{ticket.seat}</div>
            </div>
        </div>
    )
}


TicketCardItem.displayName = "TicketCardItem"


export default TicketCardItem;
