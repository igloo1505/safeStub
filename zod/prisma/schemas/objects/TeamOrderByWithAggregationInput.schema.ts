import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { TeamCountOrderByAggregateInputObjectSchema } from './TeamCountOrderByAggregateInput.schema';
import { TeamAvgOrderByAggregateInputObjectSchema } from './TeamAvgOrderByAggregateInput.schema';
import { TeamMaxOrderByAggregateInputObjectSchema } from './TeamMaxOrderByAggregateInput.schema';
import { TeamMinOrderByAggregateInputObjectSchema } from './TeamMinOrderByAggregateInput.schema';
import { TeamSumOrderByAggregateInputObjectSchema } from './TeamSumOrderByAggregateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TeamOrderByWithAggregationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    uniqueKey: z
      .union([
        z.lazy(() => SortOrderSchema),
        z.lazy(() => SortOrderInputObjectSchema),
      ])
      .optional(),
    name: z.lazy(() => SortOrderSchema).optional(),
    abbreviation: z
      .union([
        z.lazy(() => SortOrderSchema),
        z.lazy(() => SortOrderInputObjectSchema),
      ])
      .optional(),
    displayName: z
      .union([
        z.lazy(() => SortOrderSchema),
        z.lazy(() => SortOrderInputObjectSchema),
      ])
      .optional(),
    displayName_short: z
      .union([
        z.lazy(() => SortOrderSchema),
        z.lazy(() => SortOrderInputObjectSchema),
      ])
      .optional(),
    nickname: z
      .union([
        z.lazy(() => SortOrderSchema),
        z.lazy(() => SortOrderInputObjectSchema),
      ])
      .optional(),
    league: z.lazy(() => SortOrderSchema).optional(),
    sport: z.lazy(() => SortOrderSchema).optional(),
    conference: z
      .union([
        z.lazy(() => SortOrderSchema),
        z.lazy(() => SortOrderInputObjectSchema),
      ])
      .optional(),
    division: z
      .union([
        z.lazy(() => SortOrderSchema),
        z.lazy(() => SortOrderInputObjectSchema),
      ])
      .optional(),
    homeArenaId: z
      .union([
        z.lazy(() => SortOrderSchema),
        z.lazy(() => SortOrderInputObjectSchema),
      ])
      .optional(),
    eventId: z
      .union([
        z.lazy(() => SortOrderSchema),
        z.lazy(() => SortOrderInputObjectSchema),
      ])
      .optional(),
    colorsId: z
      .union([
        z.lazy(() => SortOrderSchema),
        z.lazy(() => SortOrderInputObjectSchema),
      ])
      .optional(),
    _count: z.lazy(() => TeamCountOrderByAggregateInputObjectSchema).optional(),
    _avg: z.lazy(() => TeamAvgOrderByAggregateInputObjectSchema).optional(),
    _max: z.lazy(() => TeamMaxOrderByAggregateInputObjectSchema).optional(),
    _min: z.lazy(() => TeamMinOrderByAggregateInputObjectSchema).optional(),
    _sum: z.lazy(() => TeamSumOrderByAggregateInputObjectSchema).optional(),
  })
  .strict();

export const TeamOrderByWithAggregationInputObjectSchema = Schema;
