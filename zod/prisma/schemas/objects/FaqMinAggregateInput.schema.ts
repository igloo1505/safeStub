import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.FaqMinAggregateInputType> = z
  .object({
    id: z.literal(true).optional(),
    title: z.literal(true).optional(),
    subtitle: z.literal(true).optional(),
    body: z.literal(true).optional(),
    category: z.literal(true).optional(),
    createdAt: z.literal(true).optional(),
    updatedAt: z.literal(true).optional(),
    priority: z.literal(true).optional(),
  })
  .strict();

export const FaqMinAggregateInputObjectSchema = Schema;
