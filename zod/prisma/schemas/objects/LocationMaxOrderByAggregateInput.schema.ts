import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.LocationMaxOrderByAggregateInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    uniqueKey: z.lazy(() => SortOrderSchema).optional(),
    street: z.lazy(() => SortOrderSchema).optional(),
    zip: z.lazy(() => SortOrderSchema).optional(),
    city: z.lazy(() => SortOrderSchema).optional(),
    cityId: z.lazy(() => SortOrderSchema).optional(),
    state: z.lazy(() => SortOrderSchema).optional(),
    lat: z.lazy(() => SortOrderSchema).optional(),
    long: z.lazy(() => SortOrderSchema).optional(),
    country: z.lazy(() => SortOrderSchema).optional(),
    userId: z.lazy(() => SortOrderSchema).optional(),
  })
  .strict();

export const LocationMaxOrderByAggregateInputObjectSchema = Schema;
