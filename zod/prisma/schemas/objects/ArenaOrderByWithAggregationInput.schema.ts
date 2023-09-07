import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { ArenaCountOrderByAggregateInputObjectSchema } from './ArenaCountOrderByAggregateInput.schema';
import { ArenaAvgOrderByAggregateInputObjectSchema } from './ArenaAvgOrderByAggregateInput.schema';
import { ArenaMaxOrderByAggregateInputObjectSchema } from './ArenaMaxOrderByAggregateInput.schema';
import { ArenaMinOrderByAggregateInputObjectSchema } from './ArenaMinOrderByAggregateInput.schema';
import { ArenaSumOrderByAggregateInputObjectSchema } from './ArenaSumOrderByAggregateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ArenaOrderByWithAggregationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    uniqueKey: z
      .union([
        z.lazy(() => SortOrderSchema),
        z.lazy(() => SortOrderInputObjectSchema),
      ])
      .optional(),
    name: z.lazy(() => SortOrderSchema).optional(),
    arenaAmenitiesId: z.lazy(() => SortOrderSchema).optional(),
    locationId: z.lazy(() => SortOrderSchema).optional(),
    sectionImageId: z
      .union([
        z.lazy(() => SortOrderSchema),
        z.lazy(() => SortOrderInputObjectSchema),
      ])
      .optional(),
    _count: z
      .lazy(() => ArenaCountOrderByAggregateInputObjectSchema)
      .optional(),
    _avg: z.lazy(() => ArenaAvgOrderByAggregateInputObjectSchema).optional(),
    _max: z.lazy(() => ArenaMaxOrderByAggregateInputObjectSchema).optional(),
    _min: z.lazy(() => ArenaMinOrderByAggregateInputObjectSchema).optional(),
    _sum: z.lazy(() => ArenaSumOrderByAggregateInputObjectSchema).optional(),
  })
  .strict();

export const ArenaOrderByWithAggregationInputObjectSchema = Schema;
