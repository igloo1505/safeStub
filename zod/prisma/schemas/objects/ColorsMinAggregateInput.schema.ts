import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ColorsMinAggregateInputType> = z
  .object({
    id: z.literal(true).optional(),
    primary: z.literal(true).optional(),
    secondary: z.literal(true).optional(),
  })
  .strict();

export const ColorsMinAggregateInputObjectSchema = Schema;
