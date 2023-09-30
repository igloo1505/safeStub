"use client"
import React from 'react'
import { UserProfileDetails } from '../../profilePageContainer'
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "#/components/ui/table"
import { PaymentHistoryItem } from '#/types/profile'
import { Button } from '#/components/ui/button'


interface PaymentHistoryTableProps {
    allDataLength: number
    data: PaymentHistoryItem[]
    perPage: number
    page: number
    previousPage: () => void
    nextPage: () => void
    maxPage: number
}


const PaymentHistoryTable = ({ perPage, allDataLength, data, previousPage, nextPage, page, maxPage }: PaymentHistoryTableProps) => {

    return (
        <>
            <div className="w-full h-fit flex flex-col justify-center items-end">
                <Table>
                    <TableCaption>{allDataLength === 0 ? "Your transaction history is empty." : "A summary of your recent transactions."}</TableCaption>
                    <TableHeader>
                        <TableRow>
                            {["Date", "Event", "Listing #", "Tickets", "Total Payout", "Payout Method", "Status"].map((t) => {
                                return <TableHead key={`header-${t}`}>{t}</TableHead>
                            })}
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {data.length > 0 && data.map((item) => (
                            <TableRow key={item.listingId}>
                                <TableCell className="font-medium">{item.date}</TableCell>
                                <TableCell>{item.event}</TableCell>
                                <TableCell>{item.listingId}</TableCell>
                                <TableCell>{item.seatData}</TableCell>
                                <TableCell>{item.total}</TableCell>
                                <TableCell>{item.payoutMethod}</TableCell>
                                <TableCell>{item.transactionStatus}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
                {allDataLength > perPage && (<div className={"w-full h-fit flex flex-row justify-end items-center gap-2 md:gap-4"}><Button disabled={page <= 1} variant={page <= 1 ? "ghost" : "default"} onClick={previousPage}>Back</Button> <Button disabled={page === maxPage} variant={page === maxPage ? "ghost" : "default"} onClick={nextPage}>Next</Button></div>)}
            </div>
        </>
    )
}


PaymentHistoryTable.displayName = "PaymentHistoryTable"


export default PaymentHistoryTable;
