"use client"
import { formatPaymentHistoryForTable } from '#/lib/formatting/formatPaymentHistoryForTable'
import React, { useEffect, useState } from 'react'
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
    transactionHistory?: NonNullable<UserProfileDetails>['purchaseHistory']
}


const PaymentHistoryTable = ({ transactionHistory }: PaymentHistoryTableProps) => {
    const [data, setData] = useState<PaymentHistoryItem[]>([])
    const [allData, setAllData] = useState<PaymentHistoryItem[]>([])
    const [page, setPage] = useState(1)
    const [maxPage, setMaxPage] = useState(1)
    const perPage = 10
    const setCurrentData = () => {
        const newMin = perPage * (page - 1)
        setData(allData.slice(newMin, Math.min(allData.length, newMin + perPage)))
    }
    useEffect(() => {
        setCurrentData()
    }, [page])
    useEffect(() => {
        const d = formatPaymentHistoryForTable(transactionHistory)
        setAllData(d)
        setMaxPage(Math.floor(d.length / perPage))
        setCurrentData()
    }, [])

    const nextPage = () => {
        if (page < maxPage) {
            setPage(page + 1)
        }
    }

    const previousPage = () => {
        if (page > 0) {
            setPage(page - 1)
        }
    }

    return (
        <div className="w-full h-fit flex flex-col justify-center items-end">
            <Table>
                <TableCaption>{allData.length === 0 ? "Your transaction history is empty." : "A summary of your recent transactions."}</TableCaption>
                <TableHeader>
                    <TableRow>
                        {["Date", "Event", "Listing #", "Location", "Ticket #", "Total Payout", "Payout Method", "Status"].map((t) => {
                            return <TableHead key={`header-${t}`}>{t}</TableHead>
                        })}
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {data.map((item) => (
                        <TableRow key={item.listingId}>
                            <TableCell className="font-medium">{item.date}</TableCell>
                            <TableCell>{item.event}</TableCell>
                            <TableCell>{item.listingId}</TableCell>
                            <TableCell>{item.seatData}</TableCell>
                            <TableCell>{item.ticketNumber}</TableCell>
                            <TableCell>{item.total}</TableCell>
                            <TableCell>{item.payoutMethod}</TableCell>
                            <TableCell>{item.transactionStatus}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
            {allData.length > perPage && (<><Button onClick={previousPage}>previous</Button> <Button onClick={nextPage}></Button></>)}
        </div>
    )
}


PaymentHistoryTable.displayName = "PaymentHistoryTable"


export default PaymentHistoryTable;
