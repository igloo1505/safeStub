import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PurchaseHistoryCountOutputTypeSelect> = z
  .object({
    bought: z.boolean().optional(),
    sold: z.boolean().optional(),
  })
  .strict();

export const PurchaseHistoryCountOutputTypeSelectObjectSchema = Schema;
