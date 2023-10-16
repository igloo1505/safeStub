"use client"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '#/components/ui/table'
import { formatDateShort } from '#/lib/formatting/dates'
import { showTicketDetailModal } from '#/state/slices/notifications'
import store from '#/state/store'
import { PendingTicketList } from '#/types/query'
import clsx from 'clsx'
import React from 'react'



interface TicketTableProps {
    tickets: PendingTicketList
    className?: string
}

const TicketTable = ({ tickets, className }: TicketTableProps) => {
    return (
        <Table className={clsx("max-h-[300px] overflow-y-auto", className && className)}>
            <TableHeader>
                <TableRow>
                    {["Event Date", "Section", "Row", "Seat"].map((t) => {
                        return <TableHead
                            className={clsx(t === "Event Date" && "hidden @[500px]/table:table-cell")}
                            key={`header-${t}`}
                        >{t}</TableHead>
                    })}
                </TableRow>
            </TableHeader>
            <TableBody>
                {tickets.length > 0 && tickets.map((item) => (
                    <TableRow
                        className={"cursor-pointer"}
                        key={item.id}
                        onClick={() => store.dispatch(showTicketDetailModal(item))}
                    >
                        <TableCell
                            className={"font-medium hidden @[500px]/table:table-cell"}
                        >{item.Event?.date ? formatDateShort(item.Event.date) : "--"}</TableCell>
                        <TableCell>{item.section}</TableCell>
                        <TableCell>{item.row}</TableCell>
                        <TableCell>{item.seat}</TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    )
}


TicketTable.displayName = "TicketTable"


export default TicketTable;
