import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.LegalNameAvgAggregateInputType> = z
  .object({
    detailsId: z.literal(true).optional(),
  })
  .strict();

export const LegalNameAvgAggregateInputObjectSchema = Schema;
