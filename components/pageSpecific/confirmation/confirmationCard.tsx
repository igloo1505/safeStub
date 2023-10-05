import { Separator } from '#/components/ui/separator'
import CopyText from '#/components/utility/copyText'
import { formatUSD } from '#/lib/formatting/currency'
import { formatDateLong, formatDateLongNoYear } from '#/lib/formatting/dates'
import { getFlattenedTickets } from '#/lib/formatting/util'
import type { serverClient } from '#/trpc/serverClient'
import { payoutMethodLabelMap } from '#/types/profile'
import { getTransactionUniqueId } from '#/utils/dataParsing/transactionDataUtils'
import React from 'react'



interface ConfirmationCardProps {
    event: NonNullable<Awaited<ReturnType<typeof serverClient.getEvent>>>
    transaction: NonNullable<Awaited<ReturnType<typeof serverClient.getTransactionDetails>>>
}


const CardDetailItem = ({ label, content }: { label: string, content: React.ReactNode }) => {
    return (
        <div className={"w-full text-lg grid grid-cols-[150px_1fr] gap-2 md:gap-4"}>
            <div className={"font-semibold flex flex-col justify-center items-start"}>{label}</div>
            <div className={"w-full border border-black border-opacity-40 dark:border-white dark:border-opacity-60 py-1 px-2 rounded-sm"}>{content}</div>
        </div>
    )
}

const ConfirmationCard = ({ event, transaction }: ConfirmationCardProps) => {
    let transactionUniqueId = getTransactionUniqueId(transaction)
    if (typeof transactionUniqueId === "number") {
        transactionUniqueId = `${transactionUniqueId}`
    }
    const flatTickets = getFlattenedTickets<typeof transaction>(transaction)
    let sections: string[] = []
    let rows: string[] = []
    let seats: string[] = []
    for (const t of flatTickets) {
        !sections.includes(t.section) && (sections.push(t.section))
        !rows.includes(t.row) && (rows.push(t.row))
        !seats.includes(t.seat) && (seats.push(t.seat))
    }

    return (
        <div className={"bg-card text-card-foreground border border-border shadow-md hover:shadow-sm transition-shadow duration-300 dark:shadow-none w-fit flex flex-col justify-center items-start gap-3 p-4 rounded-md"}>
            <CopyText
                copyText={transactionUniqueId}
                notifcationTitle={"Success"}
                notificationText={"Confirmation Id copied."}
                className={"flex flex-row justify-start items-center gap-x-2 md:gap-x-4 flex-wrap"}>
                <div className={"font-semibold"}>Confirmation: </div>
                <div className={"border border-black border-opacity-40 dark:border-white dark:border-opacity-60 p-1 rounded-sm"}>{transactionUniqueId}</div>
            </CopyText>
            <div className={""}>
                {event.description.replace("at", "vs")}
            </div>
            <div className={""}>{formatDateLong(event.date)}</div>
            <div className={"w-fit flex flex-col justify-center items-start md:flex-row md:justify-around md:w-full md:gap-3"}>
                <div className={"w-fit"}>{`Section${sections.length > 1 ? "s" : ""} ${sections.length > 1 ? sections.map((s, i) => i === sections.length - 1 ? 'and '.concat(s) : s).join(", ") : sections[0]}`}</div>
                <div className={"w-fit"}>{`Row${rows.length > 1 ? "s" : ""} ${rows.length > 1 ? rows.map((s, i) => i === rows.length - 1 ? 'and '.concat(s) : s).join(", ") : rows[0]}`}</div>
                <div className={"w-fit"}>{`Seat${seats.length > 1 ? "s" : ""} ${seats.length > 1 ? seats.map((s, i) => i === seats.length - 1 ? 'and '.concat(s) : s).join(", ") : seats[0]}`}</div>
            </div>
            <Separator />
            <CardDetailItem
                label="# Tickets"
                content={flatTickets.length}
            />
            <CardDetailItem
                label="Listing Price"
                content={formatUSD(transaction.total)}
            />
            <CardDetailItem
                label="Estimated Payout"
                content={formatUSD(transaction.payout)}
            />
            <CardDetailItem
                label="Payout Method"
                content={payoutMethodLabelMap[transaction.payoutMethod]}
            />
        </div>
    )
}


ConfirmationCard.displayName = "ConfirmationCard"


export default ConfirmationCard;
