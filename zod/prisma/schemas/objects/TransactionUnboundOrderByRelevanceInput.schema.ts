import { z } from 'zod';
import { TransactionUnboundOrderByRelevanceFieldEnumSchema } from '../enums/TransactionUnboundOrderByRelevanceFieldEnum.schema';
import { SortOrderSchema } from '../enums/SortOrder.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TransactionUnboundOrderByRelevanceInput> = z
  .object({
    fields: z.union([
      z.lazy(() => TransactionUnboundOrderByRelevanceFieldEnumSchema),
      z.lazy(() => TransactionUnboundOrderByRelevanceFieldEnumSchema).array(),
    ]),
    sort: z.lazy(() => SortOrderSchema),
    search: z.string(),
  })
  .strict();

export const TransactionUnboundOrderByRelevanceInputObjectSchema = Schema;
