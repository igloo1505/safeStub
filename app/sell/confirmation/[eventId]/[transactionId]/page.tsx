import { getServerSession } from '#/actions/server/auth'
import PageContentWrapper from '#/components/layout/pageContentWrapper'
import ConfirmationCard from '#/components/pageSpecific/confirmation/confirmationCard'
import ConfirmationHeading from '#/components/pageSpecific/confirmation/confirmationHeading'
import { Button } from '#/components/ui/button'
import { serverClient } from '#/trpc/serverClient'
import Link from 'next/link'
import { redirect } from 'next/navigation'
import React from 'react'



interface TicketSaleConfirmationPageProps {
    params: {
        eventId: string
        transactionId: string
    }
}

const TicketSaleConfirmationPage = async (props: TicketSaleConfirmationPageProps) => {
    const session = await getServerSession()
    if (!session?.user.id) return redirect("/auth/signin")
    console.log("props: ", props)
    const event = await serverClient.getEvent({ eventId: parseInt(props.params.eventId) })
    const transaction = await serverClient.getTransactionDetails({
        userId: session.user.id,
        transactionId: parseInt(props.params.transactionId)
    })
    console.log("transaction: ", transaction)
    if (!event || !transaction) return redirect("/")
    return (
        <PageContentWrapper>
            <div className={"min-h-[calc(100vh-80px)] w-full flex flex-col justify-center items-center gap-4"}>
                <ConfirmationHeading event={event} />
                <ConfirmationCard
                    event={event}
                    transaction={transaction}
                />
                <div className={"w-fit flex flex-row justify-center items-center gap-4 sm:gap-8"}>
                    <Link href={`/editListing/${props.params.transactionId}`}>
                        <Button>Edit Listing</Button>
                    </Link>
                    <Link href={`/listing/${props.params.transactionId}`}>
                        <Button>View Listing</Button>
                    </Link>
                </div>
            </div>
        </PageContentWrapper>
    )
}


TicketSaleConfirmationPage.displayName = "TicketSaleConfirmationPage"


export default TicketSaleConfirmationPage;
