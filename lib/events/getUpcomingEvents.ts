import { prisma } from "#/db/db"
import { Prisma } from "@prisma/client"
import { z } from 'zod'

interface GetEventsParams {
    skip?: number
    take?: number
    startDate?: string | Date
    include?: Partial<Prisma.EventInclude>
}

export const validateGetUpcomingEvents = z.object({
    skip: z.number().int().optional(),
    take: z.number().int().optional(),
    start: z.date().optional()
})

export const getUpcomingEvents = async ({ startDate, skip, take, include }: GetEventsParams) => {
    let _startDate = startDate || new Date()
    let _skip = skip || 0
    let _take = take || 10

    let args: Prisma.EventFindManyArgs = {
        where: {
            date: {
                gte: _startDate
            }
        },
        skip: _skip,
        take: _take,
        orderBy: {
            date: "asc"
        },
        include: {
            participants: true,
            arena: true,
            ...(include && { ...include })
        }
    }

    let games = await prisma.event.findMany(args)
    return games
}
