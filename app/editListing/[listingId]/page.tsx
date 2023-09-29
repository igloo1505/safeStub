import { getServerSession } from '#/actions/server/auth'
import PageContentWrapper from '#/components/layout/pageContentWrapper'
import EditListingForm from '#/components/pageSpecific/editListing/editListingForm'
import { serverClient } from '#/trpc/serverClient'
import { redirect } from 'next/navigation'
import React from 'react'



interface EditListingPageProps {
    params: {
        listingId: string
    }
}

const EditListingPage = async ({ params: { listingId } }: EditListingPageProps) => {
    const session = await getServerSession()
    if (!session?.user.id) return redirect("/auth/signin")
    const item = await serverClient.getTransactionDetails({ transactionId: parseInt(listingId), userId: session.user.id })
    if (!item) return redirect("/")
    return (
        <PageContentWrapper>
            <EditListingForm item={item} />
        </PageContentWrapper>
    )
}


EditListingPage.displayName = "EditListingPage"


export default EditListingPage;
