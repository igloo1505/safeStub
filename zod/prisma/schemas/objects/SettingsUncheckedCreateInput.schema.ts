import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SettingsUncheckedCreateInput> = z
  .object({
    id: z.number().optional(),
    darkmode: z.boolean().optional(),
    userId: z.number(),
  })
  .strict();

export const SettingsUncheckedCreateInputObjectSchema = Schema;
