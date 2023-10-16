import { WithClassName } from '#/types/utility'
import React from 'react'
import ProfileItemCard from './cardContainer'
import { serverClient } from '#/trpc/serverClient'
import { PendingTicketList } from '#/types/query'
import TicketTable from '#/components/utility/tables/ticketTable'



interface AwaitingTransferCardProps extends WithClassName {
    title?: string
    delay: number
    show: boolean
    userId: string
}

const PendingTicketsTable = ({ tickets }: { tickets: PendingTicketList }) => {
    return (
        <TicketTable tickets={tickets} />
    )
}


const AwaitingTransferCard = async ({ className, show, delay, userId }: AwaitingTransferCardProps) => {
    const tickets = await serverClient.getTicketsPendingTransferToSafeStub(userId)
    return (
        <ProfileItemCard
            className={className}
            delay={delay}
            show={show}
            title="Sales Pending Transfer"
        >
            {tickets.length > 0 ? <PendingTicketsTable tickets={tickets} /> : <div className={"text-center w-full"}>No tickets pending transfer</div>}
        </ProfileItemCard>
    )

}


AwaitingTransferCard.displayName = "AwaitingTransferCard"


export default AwaitingTransferCard;
