import React from 'react'
import SearchResultListItem from './searchResultLi'
import { SearchEventsResult } from '#/types/events'



interface EventSearchResultListProps {
    events: SearchEventsResult['data']
    hasTickets: boolean
}

const EventSearchResultList = ({ events, hasTickets }: EventSearchResultListProps) => {
    return (
        <ul className={""}>
            {events.map((event, i) => <SearchResultListItem event={event} hasTickets={hasTickets} key={`event-${i}`} />)}
        </ul>
    )
}


EventSearchResultList.displayName = "EventSearchResultList"


export default EventSearchResultList;
