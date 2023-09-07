import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.LogoMinAggregateInputType> = z
  .object({
    id: z.literal(true).optional(),
    path: z.literal(true).optional(),
    width: z.literal(true).optional(),
    height: z.literal(true).optional(),
    url: z.literal(true).optional(),
    teamId: z.literal(true).optional(),
  })
  .strict();

export const LogoMinAggregateInputObjectSchema = Schema;
