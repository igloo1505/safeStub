import { Prisma } from "@prisma/client";
import { z } from "zod";


export const settingsChangeSchema: z.ZodType<Required<Prisma.SettingsCreateInput>> = z
    .object({
        darkmode: z.boolean().default(true),
    })
    .strict();

