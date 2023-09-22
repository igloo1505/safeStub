import PageContentWrapper from '#/components/layout/pageContentWrapper'
import PaginateButtons from '#/components/pageSpecific/events/pagination'
import EventSearchResultList from '#/components/pageSpecific/events/searchResultList'
import { serverClient } from '#/trpc/serverClient'
import React from 'react'


interface EventsPageProps {
    searchParams?: {
        page?: string
    }
}

const EventsPage = async ({ searchParams }: EventsPageProps) => {
    const page = parseInt(searchParams?.page || `${1}`)
    const perPage = 500
    const events = await serverClient.searchEvents({
        page,
        perPage
    })
    /* console.log("events: ", events.data.map((e) => e._count)) */
    return (
        <PageContentWrapper>
            <EventSearchResultList
                events={events.data}
            />
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
