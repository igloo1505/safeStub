import React, { useContext } from 'react'
import SlidingFormCard from './slidingFormCard'
import { SaleCardTitle, SaleCardEventInfo } from './step1'
import { SingleEventReturned } from '#/types/query'
import { SaleFormObjectType, SaleFormType } from './saleFormContext'
import { formatUSD } from '#/lib/formatting/currency'
import { calculatePayout } from '#/lib/business/calculatePayout'
import { useRouter } from 'next/navigation'
import { Route } from 'next'
import { client } from '#/trpc/client'
import store from '#/state/store'
import { showNotification } from '#/state/slices/notifications'



interface PostForSaleConfirmationProps {
    event: NonNullable<SingleEventReturned>
    form: SaleFormType
    userId: string
}


const SaleConfirmationItem = ({ label, value }: { label: string, value: string }) => {
    return (
        <div className={"flex flex-col justify-start items-start mb-4"}>
            <h3 className={"text-lg font-bold"}>{label}</h3>
            <p className={"pl-4"}>{value}</p>
        </div>
    )
}


const TicketLabelItem = ({ label, value }: { label: string, value: string }) => {
    return (
        <div className={"w-full flex flex-col justify-center items-start"}>
            <div className={"text-sm font-semibold"}>{label}</div>
            <div className={""}>{value}</div>
        </div>
    )
}


const TicketConfirmationItem = ({ ticket, index }: { ticket: SaleFormObjectType['tickets'][number], index: number }) => {
    return (
        <div className={""}>
            <h3>{`Ticket #${index + 1}`}</h3>
            <div className={"w-full gap-4 grid grid-cols-3"}>
                <TicketLabelItem {...{ label: "Section", value: ticket.section }} />
                <TicketLabelItem {...{ label: "Row", value: ticket.row }} />
                <TicketLabelItem {...{ label: "Seat", value: ticket.seat }} />
            </div>
        </div>
    )
}


const PostForSaleConfirmation = ({ form, userId, event }: PostForSaleConfirmationProps) => {
    const router = useRouter()
    const quant = form.watch("quantity")
    const tickets = form.watch("tickets")
    const items: { label: string, value: string }[] = [
        {
            label: "Quantity",
            value: `${quant} ${quant === 1 ? "Ticket" : "Tickets"}`
        },
        {
            label: "Listing Price",
            value: `${formatUSD(form.watch("pricePerTicket"))} per ticket`
        },
        {
            label: "Total Payout",
            value: formatUSD(calculatePayout(form.getValues()))
        },
    ]
    const submitTicket = async () => {
        let data = form.getValues()
        let phone = await client.getUserPhone.query(userId)
        if (!phone) {
            return store.dispatch(showNotification("phoneInput"))
        }
        const transaction = await client.createTransaction.mutate({ ...data, sellerId: userId, eventId: event.id, quantity: data.tickets.length })
        if (transaction.id) {
            router.push(`/sell/confirmation/${event.id}/${transaction.id}` as Route)
        } else {
            console.log(`Something went wrong...`, data)
        }
    }

    return (
        <SlidingFormCard step={4} handleSubmit={submitTicket}>
            <SaleCardTitle>Review Listing Details</SaleCardTitle>
            <SaleCardEventInfo event={event} />
            <div className={"w-full h-fit flex flex-col justify-center items-center md:grid md:grid-cols-2"}>
                {items.map((item) => <SaleConfirmationItem
                    {...item}
                    key={item.label} />)
                }
                {tickets.map((t, i) => {
                    return (
                        <TicketConfirmationItem index={i} ticket={t} key={`${t.section}-${t.row}-${t.seat}`} />
                    )
                })}
            </div>
        </SlidingFormCard>
    )
}


PostForSaleConfirmation.displayName = "PostForSaleConfirmation"


export default PostForSaleConfirmation;
