import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.LegalNameSumAggregateInputType> = z
  .object({
    detailsId: z.literal(true).optional(),
  })
  .strict();

export const LegalNameSumAggregateInputObjectSchema = Schema;
