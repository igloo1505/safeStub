import { WithClassName } from '#/types/utility'
import React from 'react'
import ProfileItemCard from './cardContainer'
import { PendingTicketList } from '#/types/query'
import TicketTable from '#/components/utility/tables/ticketTable'



interface AwaitingTransferCardProps extends WithClassName {
    title?: string
    delay: number
    show: boolean
    pendingTickets: Promise<PendingTicketList>
}



const AwaitingTransferCard = async ({ className, show, delay, pendingTickets }: AwaitingTransferCardProps) => {
    const _pendingTickets = await pendingTickets
    if (!_pendingTickets || _pendingTickets.length === 0) return null
    return (
        <ProfileItemCard
            className={className}
            delay={delay}
            show={show}
            title="Sales Pending Transfer"
        >
            {_pendingTickets && _pendingTickets.length > 0 ? <TicketTable tickets={_pendingTickets || []} /> : <div className={"text-center w-full"}>No tickets pending transfer</div>}
        </ProfileItemCard>
    )

}


AwaitingTransferCard.displayName = "AwaitingTransferCard"


export default AwaitingTransferCard;
