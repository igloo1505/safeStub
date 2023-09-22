"use client"
import React from 'react'
import SearchResultListItem from './searchResultLi'
import { SearchEventsResult } from '#/types/events'
import TrpcProvider from '#/trpc/TrpcProvider'
import { useQuery, useQueryClient } from '@tanstack/react-query'
import { client } from '#/trpc/client'
import { useSearchParams } from 'next/navigation'
import { EventsSearchParams, EventsSearchSort } from '#/utils/server/searchEvents'


interface EventSearchResultListProps {
    events: SearchEventsResult['data']
}


const SL = () => {
    const events: any[] = []
    const d = useSearchParams()
    const page = d.get("page")
    const pp = d.get("perPage")
    const _query = d.get("query") || undefined
    let params: EventsSearchParams = {
        page: page ? parseInt(page) : 1,
        perPage: pp ? parseInt(pp) : 20,
        query: _query,
        sort: d.get("sort") as EventsSearchSort || "upNext"
    }
    const queryClient = useQueryClient()
    let _queryKey = _query ? ['eventsSearchResult', page, _query] : ['eventsSearchResult', page]

    const { status, data, error, isFetching, isPreviousData } = useQuery({
        queryKey: _queryKey,
        queryFn: () => client.searchEvents.query(params),
        keepPreviousData: true
    })
    return (
        <ul className={""}>
            {data?.data.map((event, i) => <SearchResultListItem key={`sr-${i}`} event={event} />)}
        </ul>
    )
}

const EventSearchResultList = ({ events }: EventSearchResultListProps) => {
    return (
        <TrpcProvider>
            <SL />
        </TrpcProvider>

    )
}


EventSearchResultList.displayName = "EventSearchResultList"


export default EventSearchResultList;
