import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { EventCountOrderByAggregateInputObjectSchema } from './EventCountOrderByAggregateInput.schema';
import { EventAvgOrderByAggregateInputObjectSchema } from './EventAvgOrderByAggregateInput.schema';
import { EventMaxOrderByAggregateInputObjectSchema } from './EventMaxOrderByAggregateInput.schema';
import { EventMinOrderByAggregateInputObjectSchema } from './EventMinOrderByAggregateInput.schema';
import { EventSumOrderByAggregateInputObjectSchema } from './EventSumOrderByAggregateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.EventOrderByWithAggregationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    category: z.lazy(() => SortOrderSchema).optional(),
    arenaId: z.lazy(() => SortOrderSchema).optional(),
    amenitiesId: z.lazy(() => SortOrderSchema).optional(),
    date: z.lazy(() => SortOrderSchema).optional(),
    title: z.lazy(() => SortOrderSchema).optional(),
    description: z.lazy(() => SortOrderSchema).optional(),
    _count: z
      .lazy(() => EventCountOrderByAggregateInputObjectSchema)
      .optional(),
    _avg: z.lazy(() => EventAvgOrderByAggregateInputObjectSchema).optional(),
    _max: z.lazy(() => EventMaxOrderByAggregateInputObjectSchema).optional(),
    _min: z.lazy(() => EventMinOrderByAggregateInputObjectSchema).optional(),
    _sum: z.lazy(() => EventSumOrderByAggregateInputObjectSchema).optional(),
  })
  .strict();

export const EventOrderByWithAggregationInputObjectSchema = Schema;
