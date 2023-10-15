import PageContentWrapper from '#/components/layout/pageContentWrapper'
import { CheckoutForm } from '#/components/payment/checkoutForm'
import { serverClient } from '#/trpc/serverClient'
import React from 'react'



interface CheckoutPageProps {
    params: {
        transactionId: string
    }
    searchParams: {
        tickets: string[]
    }
}

const CheckoutPage = async ({ params: { transactionId }, searchParams: { tickets } }: CheckoutPageProps) => {
    const ticketIds = tickets.map((t) => parseInt(t))
    const data = await serverClient.getCheckoutData({
        transactionId: parseInt(transactionId),
        ticketIds: ticketIds
    })
    return (
        <PageContentWrapper>
            <div className={"w-5/6"}>
                <CheckoutForm
                    ticketIds={ticketIds}
                    amount={data.averagedTotal}
                />
            </div>
        </PageContentWrapper>
    )
}


CheckoutPage.displayName = "CheckoutPage"


export default CheckoutPage;
