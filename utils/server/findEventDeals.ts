import { prisma } from '#/db/db'
import * as z from 'zod'
import { BasicSearchParams } from './searchEvents'


export const findGreatDealParams: z.ZodType<BasicSearchParams> = z.object({
    page: z.coerce.number().int().default(1),
    skip: z.coerce.number().int().default(0),
    take: z.coerce.number().int().default(20),
    perPage: z.coerce.number().int().default(20)
})

export const findGreatDeals = async (params: BasicSearchParams) => {
    // TODO: Handle sorting by deals here...
    return await prisma.ticket.findMany({
        skip: params.skip,
        take: params.take,
    })

}
