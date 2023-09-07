import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.LogoSumAggregateInputType> = z
  .object({
    id: z.literal(true).optional(),
    width: z.literal(true).optional(),
    height: z.literal(true).optional(),
    teamId: z.literal(true).optional(),
  })
  .strict();

export const LogoSumAggregateInputObjectSchema = Schema;
