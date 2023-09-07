import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { FaqCountOrderByAggregateInputObjectSchema } from './FaqCountOrderByAggregateInput.schema';
import { FaqAvgOrderByAggregateInputObjectSchema } from './FaqAvgOrderByAggregateInput.schema';
import { FaqMaxOrderByAggregateInputObjectSchema } from './FaqMaxOrderByAggregateInput.schema';
import { FaqMinOrderByAggregateInputObjectSchema } from './FaqMinOrderByAggregateInput.schema';
import { FaqSumOrderByAggregateInputObjectSchema } from './FaqSumOrderByAggregateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.FaqOrderByWithAggregationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    title: z.lazy(() => SortOrderSchema).optional(),
    subtitle: z.lazy(() => SortOrderSchema).optional(),
    body: z.lazy(() => SortOrderSchema).optional(),
    category: z.lazy(() => SortOrderSchema).optional(),
    createdAt: z.lazy(() => SortOrderSchema).optional(),
    updatedAt: z.lazy(() => SortOrderSchema).optional(),
    priority: z.lazy(() => SortOrderSchema).optional(),
    _count: z.lazy(() => FaqCountOrderByAggregateInputObjectSchema).optional(),
    _avg: z.lazy(() => FaqAvgOrderByAggregateInputObjectSchema).optional(),
    _max: z.lazy(() => FaqMaxOrderByAggregateInputObjectSchema).optional(),
    _min: z.lazy(() => FaqMinOrderByAggregateInputObjectSchema).optional(),
    _sum: z.lazy(() => FaqSumOrderByAggregateInputObjectSchema).optional(),
  })
  .strict();

export const FaqOrderByWithAggregationInputObjectSchema = Schema;
