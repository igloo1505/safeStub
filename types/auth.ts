import { ROLE } from "@prisma/client";
import { Session } from "next-auth";
import { z } from 'zod'

export type SessionType = Session | undefined | null


export const UserAccessInput = z.object({
    userId: z.string(),
    role: z.nativeEnum(ROLE)
})
