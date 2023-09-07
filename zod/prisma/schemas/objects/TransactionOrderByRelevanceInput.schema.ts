import { z } from 'zod';
import { TransactionOrderByRelevanceFieldEnumSchema } from '../enums/TransactionOrderByRelevanceFieldEnum.schema';
import { SortOrderSchema } from '../enums/SortOrder.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TransactionOrderByRelevanceInput> = z
  .object({
    fields: z.union([
      z.lazy(() => TransactionOrderByRelevanceFieldEnumSchema),
      z.lazy(() => TransactionOrderByRelevanceFieldEnumSchema).array(),
    ]),
    sort: z.lazy(() => SortOrderSchema),
    search: z.string(),
  })
  .strict();

export const TransactionOrderByRelevanceInputObjectSchema = Schema;
