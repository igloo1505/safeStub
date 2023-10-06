import PageContentWrapper from '#/components/layout/pageContentWrapper'
import TransactionDetails from '#/components/pageSpecific/specificListing/transactionDetails'
import { serverClient } from '#/trpc/serverClient'
import { redirect } from 'next/navigation'
import React from 'react'



interface ListingDetailsPageProps {
    params: {
        transactionId: string
    }
}

const ListingDetailsPage = async ({ params: { transactionId } }: ListingDetailsPageProps) => {
    if (!transactionId || transactionId === "null") return redirect("/")
    const transaction = await serverClient.getTransactionDetails({ transactionId: parseInt(transactionId) })
    if (!transaction) return redirect("/")
    return (
        <PageContentWrapper>
            <div className={"min-h-innerScreen w-full flex flex-col justify-center items-center gap-3"}>
                <TransactionDetails transaction={transaction} />
            </div>
        </PageContentWrapper>
    )
}


ListingDetailsPage.displayName = "ListingDetailsPage"


export default ListingDetailsPage;
