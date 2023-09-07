import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ColorsMinOrderByAggregateInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    primary: z.lazy(() => SortOrderSchema).optional(),
    secondary: z.lazy(() => SortOrderSchema).optional(),
  })
  .strict();

export const ColorsMinOrderByAggregateInputObjectSchema = Schema;
