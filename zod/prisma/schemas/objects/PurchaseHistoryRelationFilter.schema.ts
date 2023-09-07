import { z } from 'zod';
import { PurchaseHistoryWhereInputObjectSchema } from './PurchaseHistoryWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PurchaseHistoryRelationFilter> = z
  .object({
    is: z
      .lazy(() => PurchaseHistoryWhereInputObjectSchema)
      .optional()
      .nullable(),
    isNot: z
      .lazy(() => PurchaseHistoryWhereInputObjectSchema)
      .optional()
      .nullable(),
  })
  .strict();

export const PurchaseHistoryRelationFilterObjectSchema = Schema;
