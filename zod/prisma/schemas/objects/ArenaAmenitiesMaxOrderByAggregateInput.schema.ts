import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ArenaAmenitiesMaxOrderByAggregateInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    indoor: z.lazy(() => SortOrderSchema).optional(),
    covered: z.lazy(() => SortOrderSchema).optional(),
    outdoor: z.lazy(() => SortOrderSchema).optional(),
    food: z.lazy(() => SortOrderSchema).optional(),
    alcohol: z.lazy(() => SortOrderSchema).optional(),
    parking: z.lazy(() => SortOrderSchema).optional(),
    shuttleAvailable: z.lazy(() => SortOrderSchema).optional(),
  })
  .strict();

export const ArenaAmenitiesMaxOrderByAggregateInputObjectSchema = Schema;
