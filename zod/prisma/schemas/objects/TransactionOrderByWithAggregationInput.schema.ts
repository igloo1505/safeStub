import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { TransactionCountOrderByAggregateInputObjectSchema } from './TransactionCountOrderByAggregateInput.schema';
import { TransactionAvgOrderByAggregateInputObjectSchema } from './TransactionAvgOrderByAggregateInput.schema';
import { TransactionMaxOrderByAggregateInputObjectSchema } from './TransactionMaxOrderByAggregateInput.schema';
import { TransactionMinOrderByAggregateInputObjectSchema } from './TransactionMinOrderByAggregateInput.schema';
import { TransactionSumOrderByAggregateInputObjectSchema } from './TransactionSumOrderByAggregateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TransactionOrderByWithAggregationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    listedPrice: z.lazy(() => SortOrderSchema).optional(),
    sellerId: z.lazy(() => SortOrderSchema).optional(),
    buyerId: z
      .union([
        z.lazy(() => SortOrderSchema),
        z.lazy(() => SortOrderInputObjectSchema),
      ])
      .optional(),
    status: z.lazy(() => SortOrderSchema).optional(),
    total: z.lazy(() => SortOrderSchema).optional(),
    payout: z.lazy(() => SortOrderSchema).optional(),
    payoutMethod: z.lazy(() => SortOrderSchema).optional(),
    postedOn: z.lazy(() => SortOrderSchema).optional(),
    purchasedOn: z
      .union([
        z.lazy(() => SortOrderSchema),
        z.lazy(() => SortOrderInputObjectSchema),
      ])
      .optional(),
    _count: z
      .lazy(() => TransactionCountOrderByAggregateInputObjectSchema)
      .optional(),
    _avg: z
      .lazy(() => TransactionAvgOrderByAggregateInputObjectSchema)
      .optional(),
    _max: z
      .lazy(() => TransactionMaxOrderByAggregateInputObjectSchema)
      .optional(),
    _min: z
      .lazy(() => TransactionMinOrderByAggregateInputObjectSchema)
      .optional(),
    _sum: z
      .lazy(() => TransactionSumOrderByAggregateInputObjectSchema)
      .optional(),
  })
  .strict();

export const TransactionOrderByWithAggregationInputObjectSchema = Schema;
