import { prisma } from '#/db/db'
import { NFLTeamName } from '@prisma/client'
import * as z from 'zod'
import type { Prisma } from "@prisma/client"
import { nflTeamNameList } from '#/seed/seedNflGames2023'



export enum EventsSearchSort {
    upNext = "upNext",
    price = "price"
}

export interface EventsSearchParams {
    team?: NFLTeamName
    skip?: number
    take?: number
    query?: string
    page?: number
    perPage?: number
    sort?: EventsSearchSort
}

export const searchEventsParams: z.ZodType<EventsSearchParams> = z.object({
    team: z.nativeEnum(NFLTeamName).optional(),
    skip: z.number().int().default(0),
    take: z.number().int().default(50),
    query: z.string().optional(),
    page: z.coerce.number().default(1),
    perPage: z.coerce.number().default(20),
    sort: z.nativeEnum(EventsSearchSort)
})


export const getEventsSearchResult = async (props: EventsSearchParams) => {
    const pp = props.perPage || 20
    const page = props.page || 1
    const query = props.query ? nflTeamNameList.find((t) => t.toLowerCase() === props.query?.toLowerCase()) || props.query : undefined
    let isTeam = query ? nflTeamNameList.includes(query) : false
    let params: Prisma.EventFindManyArgs = {
        orderBy: {
            date: "asc"
        },
        where: {
            date: {
                gte: new Date()
            }
        },
        skip: pp * (page - 1),
        take: pp,
        select: {
            id: true,
            date: true,
            title: true,
            description: true,
            arena: {
                include: {
                    location: true
                }
            },
            _count: true
        },
        distinct: ['id']
    }
    const addWhere = (val: Prisma.EventWhereInput) => {
        if (!params.where) {
            params.where = {}
        }
        params.where = { ...params.where, ...val }
    }
    props.team && addWhere({
        participants: {
            some: {
                name: {
                    equals: props.team
                }
            }
        }
    })

    props.query && addWhere({
        OR: [
            { title: { search: props.query, mode: "insensitive" } },
            { description: { search: props.query, mode: "insensitive" } },
            {
                tags: {
                    some: {
                        value: {
                            equals: props.query
                        }
                    }
                }
            },
        ]
    })
    isTeam && params.where?.OR && params.where?.OR.push({
        participants: {
            some: {
                name: {
                    equals: query as NFLTeamName
                }
            }
        }
    },
    )

    const eventCount = await prisma.event.count({
        where: params.where
    })


    let events = await prisma.event.findMany(params)
    return { data: events, eventCount }
}
