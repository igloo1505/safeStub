import { PayoutMethodEnum, SaleFormObjectType } from '#/components/pageSpecific/sell/form/saleFormContext';
import { Button } from '#/components/ui/button';
import { client } from '#/trpc/client';
import { randomUUID } from 'crypto';
import { getSession } from 'next-auth/react';
import React from 'react'



interface SeedTicketsButtonProps {

}

const year = 60 * 60 * 24 * 365.24 * 1000

const getUniqueId = () => {
    return randomUUID()
}

const getUniquePseudoTicket = (userId: string): SaleFormObjectType & { postedOn?: string | Date } => {
    let q = Math.ceil(Math.random() * 15)
    let tickets: SaleFormObjectType['tickets'] = []
    let section = `${Math.floor(Math.random() * 12)}`
    let row = `${Math.floor(Math.random() * 30)}`

    for (var i = 0; i < q; i++) {
        let s = Math.floor(Math.random() * 10)
        tickets.push({
            section,
            row,
            seat: `${s + i}`
        })
    }
    return {
        quantity: q,
        eventId: Math.floor(Math.random() * 330),
        sellerId: userId,
        tickets,
        payoutMethod: PayoutMethodEnum.paypal,
        pricePerTicket: parseFloat((Math.random() * 500).toFixed(2)),
        postedOn: new Date(new Date().valueOf() - Math.random() * year)
    }
}

const SeedTicketsButton = () => {
    const syncTestTickets = async () => {
        const session = await getSession()
        const userId = session?.user.id
        if (!userId) return
        const data: SaleFormObjectType[] = []
        for (var i = 0; i < 5; i++) {
            data.push(getUniquePseudoTicket(userId))
        }
        for (const k of data) {
            await client.createTransaction.mutate(k)
        }
    }
    return (
        <Button
            className={"w-full mt-4"}
            onClick={syncTestTickets}
        >Seed Test Tickets</Button>
    )
}


SeedTicketsButton.displayName = "SeedTicketsButton"


export default SeedTicketsButton;
