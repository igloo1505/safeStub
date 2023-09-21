import { day } from '#/lib/formatting/dates'
import { formatLocation } from '#/lib/formatting/teamNames'
import { SearchEventsResult } from '#/types/events'
import React from 'react'


interface SearchResultListItemProps {
    event: SearchEventsResult[number]
}

const SearchResultListItem = ({ event }: SearchResultListItemProps) => {
    return (
        <li className={"w-full"}>
            <div className={"w-fit flex flex-col justify-center items-start"}>
                <div className={""}>{day(event.date).format("MMMM Do")}</div>
                <div className={""}>{day(event.date).format("dddd [at] h:mm A")}</div>
            </div>
            <div className={"flex flex-col  justify-center items-start"}>
                <div className={""}>{event.description}</div>
                <div className={""}>{formatLocation(event.location)}</div>
            </div>
        </li>
    )
}


SearchResultListItem.displayName = "SearchResultListItem"


export default SearchResultListItem;
