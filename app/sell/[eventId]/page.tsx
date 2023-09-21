import PageContentWrapper from '#/components/layout/pageContentWrapper'
import { serverClient } from '#/trpc/serverClient'
import { notFound, redirect } from 'next/navigation'
import React from 'react'
import SellPageContainer from './pageContainer'
import { getServerSession } from '#/actions/server/auth'



interface SellPageProps {
    params: {
        eventId: string
    }
}

const SellPage = async ({ params: { eventId } }: SellPageProps) => {
    const event = await serverClient.getEvent({ eventId: parseInt(eventId) })
    if (!event) return notFound()
    const session = await getServerSession()
    if (!session?.user.id) {
        redirect("/auth/signin")
    }
    return (
        <PageContentWrapper>
            <SellPageContainer event={event} userId={session.user.id} />
        </PageContentWrapper>
    )
}


SellPage.displayName = "SellPage"


export default SellPage;
