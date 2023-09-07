import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.FaqSumOrderByAggregateInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    priority: z.lazy(() => SortOrderSchema).optional(),
  })
  .strict();

export const FaqSumOrderByAggregateInputObjectSchema = Schema;
