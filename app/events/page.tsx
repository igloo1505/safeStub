import PageContentWrapper from '#/components/layout/pageContentWrapper'
import PaginateButtons from '#/components/pageSpecific/events/pagination'
import EventSearchResultList from '#/components/pageSpecific/events/searchResultList'
import { serverClient } from '#/trpc/serverClient'
import React from 'react'


interface EventsPageProps {
    searchParams?: {
        page?: number
    }
}

const EventsPage = async ({ searchParams }: EventsPageProps) => {
    const page = searchParams?.page || 1
    const perPage = 20
    const events = await serverClient.searchEvents({
        page,
        perPage
    })
    return (
        <PageContentWrapper>
            <EventSearchResultList
                events={events.data}
                /* @ts-ignore */
                hasTickets={Boolean(events?._count?.tickets > 0 || events?._count?.ticketGroup > 0)} />
            <PaginateButtons
                page={page}
                maxPages={Math.ceil(events.eventCount / perPage)}
                formatUrl="/events?page=NN"
            />
        </PageContentWrapper>
    )
}


EventsPage.displayName = "EventsPage"


export default EventsPage;
