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
import TicketCardItem from '#/components/cards/ticketCardItem'



interface PostForSaleConfirmationProps {
    event: NonNullable<SingleEventReturned>
    form: SaleFormType
    userId: string
    containerId: string
}


const SaleConfirmationItem = ({ label, value }: { label: string, value: string }) => {
    return (
        <div className={"flex flex-col justify-start items-start mb-4 w-full xs:w-fit"}>
            <h3 className={"text-lg font-bold whitespace-nowrap"}>{label}</h3>
            <p className={"pl-4 whitespace-nowrap"}>{value}</p>
        </div>
    )
}



const PostForSaleConfirmation = ({ form, userId, event, containerId }: PostForSaleConfirmationProps) => {
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
        <SlidingFormCard
            containerId={containerId}
            step={4}
            handleSubmit={submitTicket}
        >
            <SaleCardTitle>Review Listing Details</SaleCardTitle>
            <SaleCardEventInfo event={event} />
            <div className={"w-full h-fit flex flex-col justify-center items-center xs:flex-row xs:items-start xs:gap-8"}>
                {items.map((item) => <SaleConfirmationItem
                    {...item}
                    key={item.label} />)
                }
            </div>
            <div className={"flex flex-col justify-start items-center gap-1 w-fit min-w-fit"}>
                {tickets.map((t, i) => {
                    return (
                        <TicketCardItem useScreen ticket={t} key={`${t.section}-${t.row}-${t.seat}`} />
                    )
                })}
            </div>
        </SlidingFormCard>
    )
}


PostForSaleConfirmation.displayName = "PostForSaleConfirmation"


export default PostForSaleConfirmation;
