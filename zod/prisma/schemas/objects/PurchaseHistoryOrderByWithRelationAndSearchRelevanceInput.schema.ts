import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { TransactionOrderByRelationAggregateInputObjectSchema } from './TransactionOrderByRelationAggregateInput.schema';
import { UserOrderByWithRelationAndSearchRelevanceInputObjectSchema } from './UserOrderByWithRelationAndSearchRelevanceInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PurchaseHistoryOrderByWithRelationAndSearchRelevanceInput> =
  z
    .object({
      id: z.lazy(() => SortOrderSchema).optional(),
      userId: z.lazy(() => SortOrderSchema).optional(),
      bought: z
        .lazy(() => TransactionOrderByRelationAggregateInputObjectSchema)
        .optional(),
      sold: z
        .lazy(() => TransactionOrderByRelationAggregateInputObjectSchema)
        .optional(),
      user: z
        .lazy(() => UserOrderByWithRelationAndSearchRelevanceInputObjectSchema)
        .optional(),
    })
    .strict();

export const PurchaseHistoryOrderByWithRelationAndSearchRelevanceInputObjectSchema =
  Schema;
