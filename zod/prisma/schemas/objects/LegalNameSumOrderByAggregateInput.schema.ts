import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.LegalNameSumOrderByAggregateInput> = z
  .object({
    detailsId: z.lazy(() => SortOrderSchema).optional(),
  })
  .strict();

export const LegalNameSumOrderByAggregateInputObjectSchema = Schema;
