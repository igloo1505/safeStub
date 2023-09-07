import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TeamMaxOrderByAggregateInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    uniqueKey: z.lazy(() => SortOrderSchema).optional(),
    name: z.lazy(() => SortOrderSchema).optional(),
    abbreviation: z.lazy(() => SortOrderSchema).optional(),
    displayName: z.lazy(() => SortOrderSchema).optional(),
    displayName_short: z.lazy(() => SortOrderSchema).optional(),
    nickname: z.lazy(() => SortOrderSchema).optional(),
    league: z.lazy(() => SortOrderSchema).optional(),
    sport: z.lazy(() => SortOrderSchema).optional(),
    conference: z.lazy(() => SortOrderSchema).optional(),
    division: z.lazy(() => SortOrderSchema).optional(),
    homeArenaId: z.lazy(() => SortOrderSchema).optional(),
    eventId: z.lazy(() => SortOrderSchema).optional(),
    colorsId: z.lazy(() => SortOrderSchema).optional(),
  })
  .strict();

export const TeamMaxOrderByAggregateInputObjectSchema = Schema;
