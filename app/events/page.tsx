import PageContentWrapper from '#/components/layout/pageContentWrapper'
import PaginateButtons from '#/components/pageSpecific/events/pagination'
import EventSearchResultList from '#/components/pageSpecific/events/searchResultList'
import { serverClient } from '#/trpc/serverClient'
import { EventsSearchParams } from '#/types/query'
import React from 'react'


interface EventsPageProps {
    searchParams?: EventsSearchParams
}

const EventsPage = async ({ searchParams }: EventsPageProps) => {
    const page = parseInt(searchParams?.page || `${1}`)
    const perPage = 20
    const events = await serverClient.searchEvents({
        page,
        perPage,
        query: searchParams?.query
    })
    return (
        <PageContentWrapper>
            <EventSearchResultList
                events={events.data}
            />
            {events.eventCount > perPage && <PaginateButtons
                page={page}
                searchParams={searchParams}
                maxPages={Math.ceil(events.eventCount / perPage)}
                formatUrl="/events"
            />}
        </PageContentWrapper>
    )
}


EventsPage.displayName = "EventsPage"


export default EventsPage;
