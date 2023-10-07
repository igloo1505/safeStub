"use client"
import TicketListDataTable from '#/components/layout/ticketListDataTable'
import CheckoutModal from '#/components/payment/checkoutModal'
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
    const [rowSelection, setRowSelection] = useState<{ [k: string]: boolean }>({})
    const [searchParamString, setSearchParamString] = useState("")
    const [checkoutOpen, setCheckoutOpen] = useState(false)
    useEffect(() => {
        let params = new URLSearchParams()
        for (const k in rowSelection) {
            params.append("tickets", `${_tickets[parseInt(k)].id}`)
        }
        setSearchParamString(params.toString())
    }, [rowSelection])

    return (
        <>
            <CheckoutModal
                open={checkoutOpen}
                close={() => setCheckoutOpen(false)}
                amount={_tickets.filter((t, i) => Boolean(rowSelection[`${i}`])).map(a => a.transactionAvereragedCost).reduce((a, b) => a + b)}
            />
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
        </>
    )
}


TransactionDetails.displayName = "TransactionDetails"


export default TransactionDetails;
