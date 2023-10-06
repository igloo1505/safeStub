"use client"
import TicketListDataTable from '#/components/layout/ticketListDataTable'
import { Button } from '#/components/ui/button'
import { getFlattenedTicketsFromTransaction } from '#/lib/formatting/util'
import type { serverClient } from '#/trpc/serverClient'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'



interface TransactionDetailsProps {
    transaction: NonNullable<Awaited<ReturnType<typeof serverClient.getTransactionDetails>>>
}


const TransactionDetails = ({ transaction }: TransactionDetailsProps) => {
    const _tickets = getFlattenedTicketsFromTransaction<typeof transaction>(transaction)
    const [rowSelection, setRowSelection] = useState({})
    const [searchParamString, setSearchParamString] = useState("")
    useEffect(() => {
        let params = new URLSearchParams()
        for (const k in rowSelection) {
            params.append("tickets", `${_tickets[parseInt(k)].id}`)
        }
        setSearchParamString(params.toString())
    }, [rowSelection])

    return (
        <div className={"w-fit h-fit"}>
            <TicketListDataTable
                tickets={_tickets}
                rowSelection={rowSelection}
                setRowSelection={setRowSelection}
            />
            <div>
                <Link href={`/checkout/${transaction.id}?${searchParamString}`}>
                    <Button>Checkout</Button>
                </Link>
            </div>
        </div>
    )
}


TransactionDetails.displayName = "TransactionDetails"


export default TransactionDetails;
