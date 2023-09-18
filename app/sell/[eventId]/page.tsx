import PageContentWrapper from '#/components/layout/pageContentWrapper'
import { serverClient } from '#/trpc/serverClient'
import { notFound } from 'next/navigation'
import React from 'react'
import SellPageContainer from './pageContainer'



interface SellPageProps {
    params: {
        eventId: string
    }
}

const SellPage = async ({ params: { eventId } }: SellPageProps) => {
    const event = await serverClient.getEvent({ eventId: parseInt(eventId) })
    if (!event) return notFound()
    return (
        <PageContentWrapper>
            <SellPageContainer event={event} />
        </PageContentWrapper>
    )
}


SellPage.displayName = "SellPage"


export default SellPage;
