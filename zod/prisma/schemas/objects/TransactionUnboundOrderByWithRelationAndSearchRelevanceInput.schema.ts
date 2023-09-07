import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { TransactionUnboundOrderByRelevanceInputObjectSchema } from './TransactionUnboundOrderByRelevanceInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TransactionUnboundOrderByWithRelationAndSearchRelevanceInput> =
  z
    .object({
      id: z.lazy(() => SortOrderSchema).optional(),
      price: z.lazy(() => SortOrderSchema).optional(),
      paymentId: z.lazy(() => SortOrderSchema).optional(),
      sellerId: z.lazy(() => SortOrderSchema).optional(),
      buyerId: z.lazy(() => SortOrderSchema).optional(),
      date: z.lazy(() => SortOrderSchema).optional(),
      _relevance: z
        .lazy(() => TransactionUnboundOrderByRelevanceInputObjectSchema)
        .optional(),
    })
    .strict();

export const TransactionUnboundOrderByWithRelationAndSearchRelevanceInputObjectSchema =
  Schema;
