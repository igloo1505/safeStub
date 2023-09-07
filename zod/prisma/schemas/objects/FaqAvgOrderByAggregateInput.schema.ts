import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.FaqAvgOrderByAggregateInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    priority: z.lazy(() => SortOrderSchema).optional(),
  })
  .strict();

export const FaqAvgOrderByAggregateInputObjectSchema = Schema;
