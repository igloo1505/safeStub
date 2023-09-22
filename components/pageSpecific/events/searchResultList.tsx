import React from 'react'
import SearchResultListItem from './searchResultLi'
import { SearchEventsResult } from '#/types/events'



interface EventSearchResultListProps {
    events: SearchEventsResult['data']
}

const EventSearchResultList = ({ events }: EventSearchResultListProps) => {
    return (
        <ul className={""}>
            {events.map((event, i) => <SearchResultListItem key={`sr-${i}`} event={event} />)}
        </ul>
    )
}


EventSearchResultList.displayName = "EventSearchResultList"


export default EventSearchResultList;
