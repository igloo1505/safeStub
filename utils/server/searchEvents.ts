import { prisma } from '#/db/db'
import { NFLTeamName } from '@prisma/client'
import * as z from 'zod'
import type { Prisma } from "@prisma/client"



interface EventsSearchParams {
    team?: NFLTeamName
    skip?: number
    take?: number
    query?: string
}

export const searchEventsParams: z.ZodType<EventsSearchParams> = z.object({
    team: z.nativeEnum(NFLTeamName).optional(),
    skip: z.number().int().default(0),
    take: z.number().int().default(50),
    query: z.string().optional()
})


export const getEventsSearchResult = async (props: EventsSearchParams) => {
    let params: Prisma.EventFindManyArgs = {
        orderBy: {
            date: "asc"
        },
        skip: props.skip || 0,
        take: props.take || 20,
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
    return await prisma.event.findMany(params)
}
