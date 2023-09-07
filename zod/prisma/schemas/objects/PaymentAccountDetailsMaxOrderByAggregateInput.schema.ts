import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PaymentAccountDetailsMaxOrderByAggregateInput> =
  z
    .object({
      id: z.lazy(() => SortOrderSchema).optional(),
      nameOnAccount: z.lazy(() => SortOrderSchema).optional(),
    })
    .strict();

export const PaymentAccountDetailsMaxOrderByAggregateInputObjectSchema = Schema;
