import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { PurchaseHistoryOrderByWithRelationAndSearchRelevanceInputObjectSchema } from './PurchaseHistoryOrderByWithRelationAndSearchRelevanceInput.schema';
import { TransactionOrderByRelevanceInputObjectSchema } from './TransactionOrderByRelevanceInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TransactionOrderByWithRelationAndSearchRelevanceInput> =
  z
    .object({
      id: z.lazy(() => SortOrderSchema).optional(),
      price: z.lazy(() => SortOrderSchema).optional(),
      paymentId: z.lazy(() => SortOrderSchema).optional(),
      sellerId: z.lazy(() => SortOrderSchema).optional(),
      buyerId: z.lazy(() => SortOrderSchema).optional(),
      date: z.lazy(() => SortOrderSchema).optional(),
      seller: z
        .lazy(
          () =>
            PurchaseHistoryOrderByWithRelationAndSearchRelevanceInputObjectSchema,
        )
        .optional(),
      buyer: z
        .lazy(
          () =>
            PurchaseHistoryOrderByWithRelationAndSearchRelevanceInputObjectSchema,
        )
        .optional(),
      _relevance: z
        .lazy(() => TransactionOrderByRelevanceInputObjectSchema)
        .optional(),
    })
    .strict();

export const TransactionOrderByWithRelationAndSearchRelevanceInputObjectSchema =
  Schema;
