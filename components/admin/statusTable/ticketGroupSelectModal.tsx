import React, { useEffect, useState } from 'react'
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from '#/components/ui/dialog';
import { Button } from '#/components/ui/button';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '#/components/ui/table';
import type { serverClient } from '#/trpc/serverClient';
import { client } from '#/trpc/client';
import CardLocationDetails from '#/components/cards/locationCardDetails';



interface TicketGroupSelectModalProps {
    transactionId: number | false
    clear: () => void
    onAccept?: () => void
    onAcceptText?: string
}


const TicketGroupSelectModal = ({ transactionId, clear, onAccept, onAcceptText }: TicketGroupSelectModalProps) => {
    const [transactionDetails, setTransactionDetails] = useState<null | Omit<Awaited<ReturnType<typeof serverClient.getTransactionDetails>>, "events">>(null)
    const [events, setEvents] = useState<Awaited<ReturnType<typeof serverClient.getTransactionDetails>>["events"]>([])
    const [tickets, setTickets] = useState<any[]>([])
    const gatherDetails = async (id: number) => {
        let details = await client.getTransactionDetails.query({ transactionId: id })
        if (details) {
            let t = details.tickets || []
            if (details.ticketGroups) {
                for (const k of details.ticketGroups) {
                    t = t.concat(k.tickets)
                }
            }
            setTransactionDetails({
                ...details,
                postedOn: details.postedOn ? new Date(details.postedOn) : undefined,
                purchasedOn: details.purchasedOn ? new Date(details.purchasedOn) : null
            })
            setTickets(t)
            setEvents(details.events ? details.events.map((d) => ({
                ...d,
                date: new Date(d.date)
            })) : [])
        }
    }

    const closeModal = () => {
        clear()
        setTransactionDetails(null)
    }
    useEffect(() => {
        if (transactionId) {
            gatherDetails(transactionId)
        }
    }, [transactionId])
    return (
        <Dialog
            open={Boolean(transactionDetails)}
            onOpenChange={(open: boolean) => {
                if (!open) {
                    closeModal()
                }
            }}
        >
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>Ticket Group</DialogTitle>
                    <DialogDescription>
                        Tickets within the same transaction.
                    </DialogDescription>
                </DialogHeader>
                <div className={"flex flex-col justify-center items-start gap-3 mb-3"}>
                    {events && events.map((e) => {
                        return <CardLocationDetails
                            key={e.id}
                            event={{
                                description: e.description
                            }}
                            location={e.arena.location}
                            date={e.date}
                        />
                    })}
                </div>
                {tickets && <div className="flex flex-col justify-center items-center gap-1 max-h-[300px]">
                    <Table className={" overflow-y-auto"}>
                        <TableHeader>
                            <TableRow>
                                {["Section", "Row", "Seat"].map((t) => {
                                    return <TableHead
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
                                >
                                    <TableCell>{item.section}</TableCell>
                                    <TableCell>{item.row}</TableCell>
                                    <TableCell>{item.seat}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </div>}
                {onAccept && (<DialogFooter className={"mt-2"}>
                    <Button onClick={() => {
                        onAccept()
                        closeModal()
                    }}>{onAcceptText || "Continue"}</Button>
                </DialogFooter>)}
            </DialogContent>
        </Dialog>
    )
}


TicketGroupSelectModal.displayName = "TicketGroupSelectModal"


export default TicketGroupSelectModal;
