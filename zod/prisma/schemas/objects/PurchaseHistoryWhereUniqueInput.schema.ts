import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PurchaseHistoryWhereUniqueInput> = z
  .object({
    id: z.number().optional(),
    userId: z.string().optional(),
  })
  .strict();

export const PurchaseHistoryWhereUniqueInputObjectSchema = Schema;
