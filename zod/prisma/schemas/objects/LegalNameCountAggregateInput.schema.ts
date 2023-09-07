import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.LegalNameCountAggregateInputType> = z
  .object({
    first: z.literal(true).optional(),
    middle: z.literal(true).optional(),
    last: z.literal(true).optional(),
    detailsId: z.literal(true).optional(),
    _all: z.literal(true).optional(),
  })
  .strict();

export const LegalNameCountAggregateInputObjectSchema = Schema;
