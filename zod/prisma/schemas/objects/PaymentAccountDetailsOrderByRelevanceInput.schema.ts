import { z } from 'zod';
import { PaymentAccountDetailsOrderByRelevanceFieldEnumSchema } from '../enums/PaymentAccountDetailsOrderByRelevanceFieldEnum.schema';
import { SortOrderSchema } from '../enums/SortOrder.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PaymentAccountDetailsOrderByRelevanceInput> = z
  .object({
    fields: z.union([
      z.lazy(() => PaymentAccountDetailsOrderByRelevanceFieldEnumSchema),
      z
        .lazy(() => PaymentAccountDetailsOrderByRelevanceFieldEnumSchema)
        .array(),
    ]),
    sort: z.lazy(() => SortOrderSchema),
    search: z.string(),
  })
  .strict();

export const PaymentAccountDetailsOrderByRelevanceInputObjectSchema = Schema;
