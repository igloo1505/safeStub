import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TeamSumAggregateInputType> = z
  .object({
    id: z.literal(true).optional(),
    homeArenaId: z.literal(true).optional(),
    eventId: z.literal(true).optional(),
    colorsId: z.literal(true).optional(),
  })
  .strict();

export const TeamSumAggregateInputObjectSchema = Schema;
