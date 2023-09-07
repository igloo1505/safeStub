import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { TransactionUnboundCountOrderByAggregateInputObjectSchema } from './TransactionUnboundCountOrderByAggregateInput.schema';
import { TransactionUnboundAvgOrderByAggregateInputObjectSchema } from './TransactionUnboundAvgOrderByAggregateInput.schema';
import { TransactionUnboundMaxOrderByAggregateInputObjectSchema } from './TransactionUnboundMaxOrderByAggregateInput.schema';
import { TransactionUnboundMinOrderByAggregateInputObjectSchema } from './TransactionUnboundMinOrderByAggregateInput.schema';
import { TransactionUnboundSumOrderByAggregateInputObjectSchema } from './TransactionUnboundSumOrderByAggregateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TransactionUnboundOrderByWithAggregationInput> =
  z
    .object({
      id: z.lazy(() => SortOrderSchema).optional(),
      price: z.lazy(() => SortOrderSchema).optional(),
      paymentId: z.lazy(() => SortOrderSchema).optional(),
      sellerId: z.lazy(() => SortOrderSchema).optional(),
      buyerId: z.lazy(() => SortOrderSchema).optional(),
      date: z.lazy(() => SortOrderSchema).optional(),
      _count: z
        .lazy(() => TransactionUnboundCountOrderByAggregateInputObjectSchema)
        .optional(),
      _avg: z
        .lazy(() => TransactionUnboundAvgOrderByAggregateInputObjectSchema)
        .optional(),
      _max: z
        .lazy(() => TransactionUnboundMaxOrderByAggregateInputObjectSchema)
        .optional(),
      _min: z
        .lazy(() => TransactionUnboundMinOrderByAggregateInputObjectSchema)
        .optional(),
      _sum: z
        .lazy(() => TransactionUnboundSumOrderByAggregateInputObjectSchema)
        .optional(),
    })
    .strict();

export const TransactionUnboundOrderByWithAggregationInputObjectSchema = Schema;
