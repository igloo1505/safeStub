import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { ColorsCountOrderByAggregateInputObjectSchema } from './ColorsCountOrderByAggregateInput.schema';
import { ColorsAvgOrderByAggregateInputObjectSchema } from './ColorsAvgOrderByAggregateInput.schema';
import { ColorsMaxOrderByAggregateInputObjectSchema } from './ColorsMaxOrderByAggregateInput.schema';
import { ColorsMinOrderByAggregateInputObjectSchema } from './ColorsMinOrderByAggregateInput.schema';
import { ColorsSumOrderByAggregateInputObjectSchema } from './ColorsSumOrderByAggregateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ColorsOrderByWithAggregationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    primary: z.lazy(() => SortOrderSchema).optional(),
    secondary: z
      .union([
        z.lazy(() => SortOrderSchema),
        z.lazy(() => SortOrderInputObjectSchema),
      ])
      .optional(),
    _count: z
      .lazy(() => ColorsCountOrderByAggregateInputObjectSchema)
      .optional(),
    _avg: z.lazy(() => ColorsAvgOrderByAggregateInputObjectSchema).optional(),
    _max: z.lazy(() => ColorsMaxOrderByAggregateInputObjectSchema).optional(),
    _min: z.lazy(() => ColorsMinOrderByAggregateInputObjectSchema).optional(),
    _sum: z.lazy(() => ColorsSumOrderByAggregateInputObjectSchema).optional(),
  })
  .strict();

export const ColorsOrderByWithAggregationInputObjectSchema = Schema;
