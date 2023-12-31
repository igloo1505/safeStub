import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PaymentAccountDetailsCountOrderByAggregateInput> =
  z
    .object({
      id: z.lazy(() => SortOrderSchema).optional(),
      nameOnAccount: z.lazy(() => SortOrderSchema).optional(),
      paymentMethodType: z.lazy(() => SortOrderSchema).optional(),
    })
    .strict();

export const PaymentAccountDetailsCountOrderByAggregateInputObjectSchema =
  Schema;
