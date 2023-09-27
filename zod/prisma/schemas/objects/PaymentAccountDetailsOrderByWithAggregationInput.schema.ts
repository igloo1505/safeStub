import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { PaymentAccountDetailsCountOrderByAggregateInputObjectSchema } from './PaymentAccountDetailsCountOrderByAggregateInput.schema';
import { PaymentAccountDetailsAvgOrderByAggregateInputObjectSchema } from './PaymentAccountDetailsAvgOrderByAggregateInput.schema';
import { PaymentAccountDetailsMaxOrderByAggregateInputObjectSchema } from './PaymentAccountDetailsMaxOrderByAggregateInput.schema';
import { PaymentAccountDetailsMinOrderByAggregateInputObjectSchema } from './PaymentAccountDetailsMinOrderByAggregateInput.schema';
import { PaymentAccountDetailsSumOrderByAggregateInputObjectSchema } from './PaymentAccountDetailsSumOrderByAggregateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PaymentAccountDetailsOrderByWithAggregationInput> =
  z
    .object({
      id: z.lazy(() => SortOrderSchema).optional(),
      nameOnAccount: z.lazy(() => SortOrderSchema).optional(),
      paymentMethodType: z.lazy(() => SortOrderSchema).optional(),
      _count: z
        .lazy(() => PaymentAccountDetailsCountOrderByAggregateInputObjectSchema)
        .optional(),
      _avg: z
        .lazy(() => PaymentAccountDetailsAvgOrderByAggregateInputObjectSchema)
        .optional(),
      _max: z
        .lazy(() => PaymentAccountDetailsMaxOrderByAggregateInputObjectSchema)
        .optional(),
      _min: z
        .lazy(() => PaymentAccountDetailsMinOrderByAggregateInputObjectSchema)
        .optional(),
      _sum: z
        .lazy(() => PaymentAccountDetailsSumOrderByAggregateInputObjectSchema)
        .optional(),
    })
    .strict();

export const PaymentAccountDetailsOrderByWithAggregationInputObjectSchema =
  Schema;
