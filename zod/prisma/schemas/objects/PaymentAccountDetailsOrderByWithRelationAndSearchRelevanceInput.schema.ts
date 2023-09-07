import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { UserOrderByRelationAggregateInputObjectSchema } from './UserOrderByRelationAggregateInput.schema';
import { PaymentAccountDetailsOrderByRelevanceInputObjectSchema } from './PaymentAccountDetailsOrderByRelevanceInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PaymentAccountDetailsOrderByWithRelationAndSearchRelevanceInput> =
  z
    .object({
      id: z.lazy(() => SortOrderSchema).optional(),
      nameOnAccount: z.lazy(() => SortOrderSchema).optional(),
      User: z
        .lazy(() => UserOrderByRelationAggregateInputObjectSchema)
        .optional(),
      _relevance: z
        .lazy(() => PaymentAccountDetailsOrderByRelevanceInputObjectSchema)
        .optional(),
    })
    .strict();

export const PaymentAccountDetailsOrderByWithRelationAndSearchRelevanceInputObjectSchema =
  Schema;
