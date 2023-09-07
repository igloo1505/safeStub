import { z } from 'zod';
import { PurchaseHistoryArgsObjectSchema } from './PurchaseHistoryArgs.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TransactionSelect> = z
  .object({
    id: z.boolean().optional(),
    price: z.boolean().optional(),
    paymentId: z.boolean().optional(),
    sellerId: z.boolean().optional(),
    buyerId: z.boolean().optional(),
    seller: z
      .union([z.boolean(), z.lazy(() => PurchaseHistoryArgsObjectSchema)])
      .optional(),
    buyer: z
      .union([z.boolean(), z.lazy(() => PurchaseHistoryArgsObjectSchema)])
      .optional(),
    date: z.boolean().optional(),
  })
  .strict();

export const TransactionSelectObjectSchema = Schema;
