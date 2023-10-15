import TicketCardItem from '#/components/cards/ticketCardItem';
import PageContentWrapper from '#/components/layout/pageContentWrapper';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '#/components/ui/card';
import { serverClient } from '#/trpc/serverClient';
import Link from 'next/link';
import React from 'react'



interface PaymentSuccessPageProps {
    searchParams: {
        ticketIds: string[]
    }
}

const PaymentSuccessPage = async ({ searchParams }: PaymentSuccessPageProps) => {
    const tickets = searchParams.ticketIds ? await serverClient.getTicketsById(searchParams.ticketIds.map((t) => parseInt(t))) : []
    return (
        <PageContentWrapper>
            <div className={"w-5/6 max-w-screen-md h-fit flex flex-col justify-center items-center gap-4"}>
                <Card>
                    <CardHeader>
                        <CardTitle>Success!</CardTitle>
                        <CardDescription>Thank you for purchasing the following tickets. SafeStub has sent a notification to the seller, and the tickets will be forwarded directly to you upon their reception at SafeStub.</CardDescription>
                    </CardHeader>
                    <CardContent className={"flex flex-col justify-start items-center gap-1 @container"}>
                        {tickets.map((ticket) => {
                            return <TicketCardItem ticket={ticket} key={ticket.id} />
                        })}
                    </CardContent>
                    <CardFooter className={"inline-block"}><span>You can read more about the way our buyer protection works</span><span><Link className={"text-sky-500 dark:text-sky-400"} href="/aboutUs">{` here`}</Link></span>.</CardFooter>
                </Card>
            </div>
        </PageContentWrapper>
    )
}


PaymentSuccessPage.displayName = "PaymentSuccessPage"


export default PaymentSuccessPage;
