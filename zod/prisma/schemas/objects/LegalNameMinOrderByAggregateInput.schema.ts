import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.LegalNameMinOrderByAggregateInput> = z
  .object({
    first: z.lazy(() => SortOrderSchema).optional(),
    middle: z.lazy(() => SortOrderSchema).optional(),
    last: z.lazy(() => SortOrderSchema).optional(),
    detailsId: z.lazy(() => SortOrderSchema).optional(),
  })
  .strict();

export const LegalNameMinOrderByAggregateInputObjectSchema = Schema;
