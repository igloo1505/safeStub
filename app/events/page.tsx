import PageContentWrapper from '#/components/layout/pageContentWrapper'
import EventSearchResultList from '#/components/pageSpecific/events/searchResultList'
import { serverClient } from '#/trpc/serverClient'
import React from 'react'



interface EventsPageProps {

}

const EventsPage = async (props: EventsPageProps) => {
    const events = await serverClient.searchEvents({})
    return (
        <PageContentWrapper>
            <div>Events page</div>
            <EventSearchResultList events={events} />
        </PageContentWrapper>
    )
}


EventsPage.displayName = "EventsPage"


export default EventsPage;
