import { BasicSearchParams } from "./searchEvents";
import * as z from 'zod'


export const paginateParamsZod: z.ZodType<BasicSearchParams> = z.object({
    skip: z.number().int().default(0),
    take: z.number().int().default(50),
    page: z.coerce.number().default(1),
    perPage: z.coerce.number().default(20),
})

export const getPagination = (params: BasicSearchParams) => {
    const pp = params.perPage || 20
    const page = params.page || 1
    return {
        skip: pp * (page - 1),
        take: pp
    }
}
