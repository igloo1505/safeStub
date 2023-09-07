import { Prisma } from "@prisma/client";
import { z } from "zod";


export const settingsChangeSchema: z.ZodType<{ darkmode?: boolean, userId: number }> = z
    .object({
        darkmode: z.boolean().default(true),
        userId: z.number().int()
    })
    .strict();

