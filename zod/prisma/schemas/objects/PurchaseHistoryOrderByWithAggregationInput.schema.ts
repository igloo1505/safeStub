import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { PurchaseHistoryCountOrderByAggregateInputObjectSchema } from './PurchaseHistoryCountOrderByAggregateInput.schema';
import { PurchaseHistoryAvgOrderByAggregateInputObjectSchema } from './PurchaseHistoryAvgOrderByAggregateInput.schema';
import { PurchaseHistoryMaxOrderByAggregateInputObjectSchema } from './PurchaseHistoryMaxOrderByAggregateInput.schema';
import { PurchaseHistoryMinOrderByAggregateInputObjectSchema } from './PurchaseHistoryMinOrderByAggregateInput.schema';
import { PurchaseHistorySumOrderByAggregateInputObjectSchema } from './PurchaseHistorySumOrderByAggregateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PurchaseHistoryOrderByWithAggregationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    userId: z.lazy(() => SortOrderSchema).optional(),
    _count: z
      .lazy(() => PurchaseHistoryCountOrderByAggregateInputObjectSchema)
      .optional(),
    _avg: z
      .lazy(() => PurchaseHistoryAvgOrderByAggregateInputObjectSchema)
      .optional(),
    _max: z
      .lazy(() => PurchaseHistoryMaxOrderByAggregateInputObjectSchema)
      .optional(),
    _min: z
      .lazy(() => PurchaseHistoryMinOrderByAggregateInputObjectSchema)
      .optional(),
    _sum: z
      .lazy(() => PurchaseHistorySumOrderByAggregateInputObjectSchema)
      .optional(),
  })
  .strict();

export const PurchaseHistoryOrderByWithAggregationInputObjectSchema = Schema;
