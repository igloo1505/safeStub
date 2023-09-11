import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TeamAvgOrderByAggregateInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    homeArenaId: z.lazy(() => SortOrderSchema).optional(),
    colorsId: z.lazy(() => SortOrderSchema).optional(),
  })
  .strict();

export const TeamAvgOrderByAggregateInputObjectSchema = Schema;
