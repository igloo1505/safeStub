import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { ArenaSectionCountOrderByAggregateInputObjectSchema } from './ArenaSectionCountOrderByAggregateInput.schema';
import { ArenaSectionAvgOrderByAggregateInputObjectSchema } from './ArenaSectionAvgOrderByAggregateInput.schema';
import { ArenaSectionMaxOrderByAggregateInputObjectSchema } from './ArenaSectionMaxOrderByAggregateInput.schema';
import { ArenaSectionMinOrderByAggregateInputObjectSchema } from './ArenaSectionMinOrderByAggregateInput.schema';
import { ArenaSectionSumOrderByAggregateInputObjectSchema } from './ArenaSectionSumOrderByAggregateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ArenaSectionOrderByWithAggregationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    name: z.lazy(() => SortOrderSchema).optional(),
    arenaId: z.lazy(() => SortOrderSchema).optional(),
    section: z.lazy(() => SortOrderSchema).optional(),
    row: z.lazy(() => SortOrderSchema).optional(),
    _count: z
      .lazy(() => ArenaSectionCountOrderByAggregateInputObjectSchema)
      .optional(),
    _avg: z
      .lazy(() => ArenaSectionAvgOrderByAggregateInputObjectSchema)
      .optional(),
    _max: z
      .lazy(() => ArenaSectionMaxOrderByAggregateInputObjectSchema)
      .optional(),
    _min: z
      .lazy(() => ArenaSectionMinOrderByAggregateInputObjectSchema)
      .optional(),
    _sum: z
      .lazy(() => ArenaSectionSumOrderByAggregateInputObjectSchema)
      .optional(),
  })
  .strict();

export const ArenaSectionOrderByWithAggregationInputObjectSchema = Schema;
