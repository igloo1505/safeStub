import { z } from 'zod';
import { PurchaseHistoryArgsObjectSchema } from './PurchaseHistoryArgs.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TransactionInclude> = z
  .object({
    seller: z
      .union([z.boolean(), z.lazy(() => PurchaseHistoryArgsObjectSchema)])
      .optional(),
    buyer: z
      .union([z.boolean(), z.lazy(() => PurchaseHistoryArgsObjectSchema)])
      .optional(),
  })
  .strict();

export const TransactionIncludeObjectSchema = Schema;
