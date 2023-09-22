import { Button } from '#/components/ui/button'
import { day } from '#/lib/formatting/dates'
import { formatLocation } from '#/lib/formatting/teamNames'
import { SearchEventsResult } from '#/types/events'
import Link from 'next/link'
import React from 'react'


interface SearchResultListItemProps {
    event: SearchEventsResult['data'][number]
}

const SearchResultListItem = ({ event }: SearchResultListItemProps) => {
    /* @ts-ignore */
    const hasTickets = Boolean(event?._count?.tickets > 0 || event?._count?.ticketGroup > 0)
    return (
        <li className={"w-full grid grid-cols-[200px_1fr_auto] gap-4 md:gap-6 px-4 py-3 border border-border bg-card hover:bg-gray-100 dark:hover:bg-card/40 transition-colors duration-200"}>
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
            <div className={"w-full h-full flex flex-col lg:flex-row justify-center items-center gap-2"}>
                {hasTickets && <Link href={`/event/${event.id}`}><Button>Buy Tickets</Button></Link>}
                <Link href={`/sell/${event.id}`}>
                    <Button>Sell Tickets</Button>
                </Link>
            </div>
        </li>
    )
}


SearchResultListItem.displayName = "SearchResultListItem"


export default SearchResultListItem;
