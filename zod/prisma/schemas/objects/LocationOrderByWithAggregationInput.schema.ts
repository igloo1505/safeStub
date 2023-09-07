import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { LocationCountOrderByAggregateInputObjectSchema } from './LocationCountOrderByAggregateInput.schema';
import { LocationAvgOrderByAggregateInputObjectSchema } from './LocationAvgOrderByAggregateInput.schema';
import { LocationMaxOrderByAggregateInputObjectSchema } from './LocationMaxOrderByAggregateInput.schema';
import { LocationMinOrderByAggregateInputObjectSchema } from './LocationMinOrderByAggregateInput.schema';
import { LocationSumOrderByAggregateInputObjectSchema } from './LocationSumOrderByAggregateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.LocationOrderByWithAggregationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    uniqueKey: z
      .union([
        z.lazy(() => SortOrderSchema),
        z.lazy(() => SortOrderInputObjectSchema),
      ])
      .optional(),
    street: z
      .union([
        z.lazy(() => SortOrderSchema),
        z.lazy(() => SortOrderInputObjectSchema),
      ])
      .optional(),
    zip: z
      .union([
        z.lazy(() => SortOrderSchema),
        z.lazy(() => SortOrderInputObjectSchema),
      ])
      .optional(),
    city: z.lazy(() => SortOrderSchema).optional(),
    cityId: z
      .union([
        z.lazy(() => SortOrderSchema),
        z.lazy(() => SortOrderInputObjectSchema),
      ])
      .optional(),
    state: z
      .union([
        z.lazy(() => SortOrderSchema),
        z.lazy(() => SortOrderInputObjectSchema),
      ])
      .optional(),
    lat: z
      .union([
        z.lazy(() => SortOrderSchema),
        z.lazy(() => SortOrderInputObjectSchema),
      ])
      .optional(),
    long: z
      .union([
        z.lazy(() => SortOrderSchema),
        z.lazy(() => SortOrderInputObjectSchema),
      ])
      .optional(),
    country: z.lazy(() => SortOrderSchema).optional(),
    userId: z
      .union([
        z.lazy(() => SortOrderSchema),
        z.lazy(() => SortOrderInputObjectSchema),
      ])
      .optional(),
    _count: z
      .lazy(() => LocationCountOrderByAggregateInputObjectSchema)
      .optional(),
    _avg: z.lazy(() => LocationAvgOrderByAggregateInputObjectSchema).optional(),
    _max: z.lazy(() => LocationMaxOrderByAggregateInputObjectSchema).optional(),
    _min: z.lazy(() => LocationMinOrderByAggregateInputObjectSchema).optional(),
    _sum: z.lazy(() => LocationSumOrderByAggregateInputObjectSchema).optional(),
  })
  .strict();

export const LocationOrderByWithAggregationInputObjectSchema = Schema;
