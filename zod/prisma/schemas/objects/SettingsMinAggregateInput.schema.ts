import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SettingsMinAggregateInputType> = z
  .object({
    id: z.literal(true).optional(),
    darkmode: z.literal(true).optional(),
    userId: z.literal(true).optional(),
  })
  .strict();

export const SettingsMinAggregateInputObjectSchema = Schema;
