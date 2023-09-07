import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { ArenaAmenitiesCountOrderByAggregateInputObjectSchema } from './ArenaAmenitiesCountOrderByAggregateInput.schema';
import { ArenaAmenitiesAvgOrderByAggregateInputObjectSchema } from './ArenaAmenitiesAvgOrderByAggregateInput.schema';
import { ArenaAmenitiesMaxOrderByAggregateInputObjectSchema } from './ArenaAmenitiesMaxOrderByAggregateInput.schema';
import { ArenaAmenitiesMinOrderByAggregateInputObjectSchema } from './ArenaAmenitiesMinOrderByAggregateInput.schema';
import { ArenaAmenitiesSumOrderByAggregateInputObjectSchema } from './ArenaAmenitiesSumOrderByAggregateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ArenaAmenitiesOrderByWithAggregationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    indoor: z.lazy(() => SortOrderSchema).optional(),
    covered: z.lazy(() => SortOrderSchema).optional(),
    outdoor: z.lazy(() => SortOrderSchema).optional(),
    food: z.lazy(() => SortOrderSchema).optional(),
    alcohol: z.lazy(() => SortOrderSchema).optional(),
    parking: z.lazy(() => SortOrderSchema).optional(),
    shuttleAvailable: z.lazy(() => SortOrderSchema).optional(),
    _count: z
      .lazy(() => ArenaAmenitiesCountOrderByAggregateInputObjectSchema)
      .optional(),
    _avg: z
      .lazy(() => ArenaAmenitiesAvgOrderByAggregateInputObjectSchema)
      .optional(),
    _max: z
      .lazy(() => ArenaAmenitiesMaxOrderByAggregateInputObjectSchema)
      .optional(),
    _min: z
      .lazy(() => ArenaAmenitiesMinOrderByAggregateInputObjectSchema)
      .optional(),
    _sum: z
      .lazy(() => ArenaAmenitiesSumOrderByAggregateInputObjectSchema)
      .optional(),
  })
  .strict();

export const ArenaAmenitiesOrderByWithAggregationInputObjectSchema = Schema;
