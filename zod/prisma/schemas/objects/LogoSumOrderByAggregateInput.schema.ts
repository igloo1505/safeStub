import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.LogoSumOrderByAggregateInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    width: z.lazy(() => SortOrderSchema).optional(),
    height: z.lazy(() => SortOrderSchema).optional(),
    teamId: z.lazy(() => SortOrderSchema).optional(),
  })
  .strict();

export const LogoSumOrderByAggregateInputObjectSchema = Schema;
