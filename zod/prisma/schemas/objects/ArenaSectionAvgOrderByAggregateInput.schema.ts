import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ArenaSectionAvgOrderByAggregateInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    arenaId: z.lazy(() => SortOrderSchema).optional(),
    section: z.lazy(() => SortOrderSchema).optional(),
    row: z.lazy(() => SortOrderSchema).optional(),
  })
  .strict();

export const ArenaSectionAvgOrderByAggregateInputObjectSchema = Schema;
