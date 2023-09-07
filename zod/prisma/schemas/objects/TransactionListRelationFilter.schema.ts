import { z } from 'zod';
import { TransactionWhereInputObjectSchema } from './TransactionWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TransactionListRelationFilter> = z
  .object({
    every: z.lazy(() => TransactionWhereInputObjectSchema).optional(),
    some: z.lazy(() => TransactionWhereInputObjectSchema).optional(),
    none: z.lazy(() => TransactionWhereInputObjectSchema).optional(),
  })
  .strict();

export const TransactionListRelationFilterObjectSchema = Schema;
