import { Button } from '#/components/ui/button'
import { day } from '#/lib/formatting/dates'
import { formatLocation } from '#/lib/formatting/teamNames'
import { SearchEventsResult } from '#/types/events'
import React from 'react'


interface SearchResultListItemProps {
    hasTickets: boolean
    event: SearchEventsResult['data'][number]
}

const SearchResultListItem = ({ event, hasTickets }: SearchResultListItemProps) => {
    return (
        <li className={"w-full grid grid-cols-[200px_1fr_auto] gap-4 px-4 py-3"}>
            <div className={"w-fit flex flex-col justify-center items-start"}>
                <div className={""}>{day(event.date).format("MMMM Do")}</div>
                <div className={""}>{day(event.date).format("dddd [at] h:mm A")}</div>
            </div>
            <div className={"flex flex-col  justify-center items-start"}>
                <div className={""}>{event.description}</div>
                <div className={""}>
                    {
                        /* @ts-ignore */
                        formatLocation(event.arena.location)
                    }
                </div>
            </div>
            <div className={"w-full h-full flex flex-col justify-center items-center gap-2"}>
                {hasTickets && <Button>Sell Tickets</Button>}
                <Button>Sell Tickets</Button>
            </div>
        </li>
    )
}


SearchResultListItem.displayName = "SearchResultListItem"


export default SearchResultListItem;
