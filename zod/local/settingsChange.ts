import { Prisma, User } from "@prisma/client";
import { z } from "zod";


export const settingsChangeSchema: z.ZodType<{ darkmode?: boolean, userId: string }> = z
    .object({
        darkmode: z.boolean().default(true),
        userId: z.string()
    })
    .strict();


export const gcmSubscriptionChangeSchema: z.ZodType<{ id: string, gcmSubscription?: PushSubscriptionJSON }> = z.object({
    id: z.string(),
    gcmSubscription: z.any()
}).strict()
