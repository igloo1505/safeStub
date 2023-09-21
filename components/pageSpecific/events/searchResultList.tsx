import React from 'react'
import SearchResultListItem from './searchResultLi'
import { SearchEventsResult } from '#/types/events'



interface EventSearchResultListProps {
    events: SearchEventsResult
}

const EventSearchResultList = ({ events }: EventSearchResultListProps) => {
    console.log("events: ", events)
    return (
        <ul className={""}>
            {events.map((event, i) => <SearchResultListItem event={event} key={`event-${i}`} />)}
        </ul>
    )
}


EventSearchResultList.displayName = "EventSearchResultList"


export default EventSearchResultList;
