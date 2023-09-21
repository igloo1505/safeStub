import { prisma } from '#/db/db'
import { NFLTeamName } from '@prisma/client'
import * as z from 'zod'
import type { Prisma } from "@prisma/client"



interface EventsSearchParams {
    team?: NFLTeamName
    skip?: number
    take?: number
    query?: string
    page?: number
    perPage?: number
}

export const searchEventsParams: z.ZodType<EventsSearchParams> = z.object({
    team: z.nativeEnum(NFLTeamName).optional(),
    skip: z.number().int().default(0),
    take: z.number().int().default(50),
    query: z.string().optional(),
    page: z.coerce.number().default(1),
    perPage: z.coerce.number().default(20)
})


export const getEventsSearchResult = async (props: EventsSearchParams) => {
    const pp = props.perPage || 20
    const page = props.page || 1
    let params: Prisma.EventFindManyArgs = {
        orderBy: {
            date: "asc"
        },
        skip: pp * (page - 1),
        take: pp,
        select: {
            date: true,
            title: true,
            description: true,
            arena: {
                include: {
                    location: true
                }
            },
            _count: true
        }
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




    const eventCount = await prisma.event.count({
        where: params.where
    })


    let events = await prisma.event.findMany(params)
    return { data: events, eventCount }
}
