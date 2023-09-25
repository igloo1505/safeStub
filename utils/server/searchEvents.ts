import { prisma } from '#/db/db'
import { NFLTeamName } from '@prisma/client'
import * as z from 'zod'
import type { Prisma } from "@prisma/client"
import { nflTeamNameList } from '#/seed/seedNflGames2023'
import { getQueryHelper } from './getQueryHelper'
import { getPagination } from './getPaginationData'



export enum EventsSearchSort {
    upNext = "upNext",
    price = "price"
}


export interface BasicSearchParams {
    skip?: number
    take?: number
    page?: number
    perPage?: number
}

export interface EventsSearchParams extends BasicSearchParams {
    team?: NFLTeamName
    query?: string
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
    const query = props.query ? nflTeamNameList.find((t) => t.toLowerCase() === props.query?.toLowerCase()) || props.query : undefined
    let queryHelper = getQueryHelper(query)
    let isTeam = query ? nflTeamNameList.includes(query) : false
    const pag = getPagination(props)
    let params: Prisma.EventFindManyArgs = {
        orderBy: {
            date: "asc"
        },
        where: {
            date: {
                gte: new Date()
            }
        },
        skip: pag.skip,
        take: pag.take,
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

    let OR: Prisma.EventWhereInput[] = [
        {
            title: {
                search: props.query,
                mode: "insensitive"
            }
        },
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

    props.team && OR.push({
        participants: {
            some: {
                name: {
                    equals: props.team
                }
            }
        }
    })

    queryHelper && OR.push({
        participants: {
            some: {
                name: {
                    equals: queryHelper
                }
            }
        }
    })


    props.query && addWhere({
        OR
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
