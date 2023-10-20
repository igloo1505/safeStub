import { Button } from '#/components/ui/button'
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from '#/components/ui/dialog'
import { client } from '#/trpc/client'
import { TicketStatus } from '@prisma/client'
import clsx from 'clsx'
import React, { useState } from 'react'



interface SetStatusModalProps {
    close: () => void
    ticketIds?: number[]
}

const SetStatusModal = ({ close, ticketIds }: SetStatusModalProps) => {
    const [selectedStatus, setSelectedStatus] = useState<TicketStatus>("forSale")
    const closeModal = () => {
        setSelectedStatus("forSale")
        close()
    }

    const setStatus = async () => {
        if (!ticketIds) return
        await client.setTicketStatus.mutate({
            ids: ticketIds,
            status: selectedStatus
        })
        closeModal()
    }

    const statuses: {
        status: TicketStatus
        label: string
    }[] = [
            {
                status: TicketStatus.forSale,
                label: "For Sale"
            },
            {
                status: TicketStatus.eventPassedWithoutSale,
                label: "Event passed without sale"
            },
            {
                status: TicketStatus.retractedBySellerWithoutSale,
                label: "Retracted by seller"
            },
            {
                status: TicketStatus.awaitingTransferFromSafeStubToBuyer,
                label: "Received & awaiting transfer"
            },
            {
                status: TicketStatus.awaitingTransferFromSellerToSafeStub,
                label: "Awaiting transfer to SafeStub"
            },
            {
                status: TicketStatus.sold,
                label: "Complete"
            },
        ]


    return (
        <Dialog
            open={Boolean(ticketIds)}
            onOpenChange={(open: boolean) => {
                if (!open) {
                    closeModal()
                }
            }}
        >
            <DialogContent className="w-fit max-w-[min(560px,90vw)]">
                <DialogHeader>
                    <DialogTitle>Ticket Group</DialogTitle>
                    <DialogDescription>
                        Tickets within the same transaction.
                    </DialogDescription>
                </DialogHeader>
                <div className={"mb-3 grid grid-cols-1 sm:grid-cols-[1fr_1fr] gap-4"}>
                    {statuses.map((s) => {
                        return <Button
                            className={clsx("w-full h-full whitespace-nowrap")}
                            variant={selectedStatus === s.status ? undefined : "outline"}
                            key={s.status}
                            /* disabled={selectedStatus === s.status} */
                            onClick={() => setSelectedStatus(s.status)}
                        >{s.label}</Button>
                    })}
                </div>
                <DialogFooter className={"mt-2"}>
                    <Button onClick={() => {
                        setStatus()
                    }}>Set Status</Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>

    )
}


SetStatusModal.displayName = "SetStatusModal"


export default SetStatusModal;
