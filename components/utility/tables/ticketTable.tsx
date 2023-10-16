import { PendingTicketList } from '#/types/query'
import { Ticket } from '@prisma/client'
import React from 'react'



interface TicketTableProps {
    tickets: Ticket[] | PendingTicketList
}

const TicketTable = ({ tickets }: TicketTableProps) => {
    console.log("tickets: ", tickets)
    return (
        <div></div>
    )
}


TicketTable.displayName = "TicketTable"


export default TicketTable;
