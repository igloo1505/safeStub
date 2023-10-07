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
    const data = await serverClient.getCheckoutData({
        transactionId: parseInt(transactionId),
        ticketIds: tickets.map((t) => parseInt(t))
    })
    return (
        <PageContentWrapper>
            <div className={"w-5/6"}>
                <CheckoutForm amount={data.averagedTotal} />
            </div>
        </PageContentWrapper>
    )
}


CheckoutPage.displayName = "CheckoutPage"


export default CheckoutPage;
