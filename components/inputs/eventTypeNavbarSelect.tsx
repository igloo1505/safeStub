import React from 'react'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';
import Link from 'next/link';
import { Route } from 'next';



interface EventTypeNavbarSelectProps {

}

interface EventTypeItem {
    league: string
    href: Route
}

const eventTypes: EventTypeItem[] = [
    {
        league: "NFL",
        href: "/events?league=nfl"
    },
    {
        league: "NBA",
        href: "/events?league=nba"
    },

    {
        league: "NHL",
        href: "/events?league=nhl"
    },
    {
        league: "MLB",
        href: "/events?league=mlb"
    },
]

const EventTypeNavbarSelect = (props: EventTypeNavbarSelectProps) => {
    return (
        <Select>
            <SelectTrigger className="w-fit px-3 [&>svg]:ml-2">
                <SelectValue
                    placeholder="Sports"
                />
            </SelectTrigger>
            <SelectContent>
                {eventTypes.map((t) => {
                    return <SelectItem key={t.league} value={t.league}>
                        <Link href={t.href}>{t.league}</Link>
                    </SelectItem>
                })}
            </SelectContent>
        </Select>
    )
}


EventTypeNavbarSelect.displayName = "EventTypeNavbarSelect"


export default EventTypeNavbarSelect;
