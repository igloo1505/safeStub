import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PurchaseHistoryCreateManyInput> = z
  .object({
    id: z.number().optional(),
    userId: z.string(),
  })
  .strict();

export const PurchaseHistoryCreateManyInputObjectSchema = Schema;
