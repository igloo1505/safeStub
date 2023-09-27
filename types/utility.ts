import { Session } from "next-auth";
import { z } from 'zod'

export interface WithSession {
    session?: Session | null
}



export const paginateSchema = z.object({
    skip: z.number().int().optional(),
    take: z.number().int().optional(),
})

export interface WithClassName {
    className?: string
}
