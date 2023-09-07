import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { LogoCountOrderByAggregateInputObjectSchema } from './LogoCountOrderByAggregateInput.schema';
import { LogoAvgOrderByAggregateInputObjectSchema } from './LogoAvgOrderByAggregateInput.schema';
import { LogoMaxOrderByAggregateInputObjectSchema } from './LogoMaxOrderByAggregateInput.schema';
import { LogoMinOrderByAggregateInputObjectSchema } from './LogoMinOrderByAggregateInput.schema';
import { LogoSumOrderByAggregateInputObjectSchema } from './LogoSumOrderByAggregateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.LogoOrderByWithAggregationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    path: z.lazy(() => SortOrderSchema).optional(),
    width: z.lazy(() => SortOrderSchema).optional(),
    height: z.lazy(() => SortOrderSchema).optional(),
    rel: z.lazy(() => SortOrderSchema).optional(),
    url: z
      .union([
        z.lazy(() => SortOrderSchema),
        z.lazy(() => SortOrderInputObjectSchema),
      ])
      .optional(),
    teamId: z
      .union([
        z.lazy(() => SortOrderSchema),
        z.lazy(() => SortOrderInputObjectSchema),
      ])
      .optional(),
    _count: z.lazy(() => LogoCountOrderByAggregateInputObjectSchema).optional(),
    _avg: z.lazy(() => LogoAvgOrderByAggregateInputObjectSchema).optional(),
    _max: z.lazy(() => LogoMaxOrderByAggregateInputObjectSchema).optional(),
    _min: z.lazy(() => LogoMinOrderByAggregateInputObjectSchema).optional(),
    _sum: z.lazy(() => LogoSumOrderByAggregateInputObjectSchema).optional(),
  })
  .strict();

export const LogoOrderByWithAggregationInputObjectSchema = Schema;
