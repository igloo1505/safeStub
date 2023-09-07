import { z } from 'zod';
import { PaymentAccountDetailsWhereInputObjectSchema } from './PaymentAccountDetailsWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PaymentAccountDetailsRelationFilter> = z
  .object({
    is: z
      .lazy(() => PaymentAccountDetailsWhereInputObjectSchema)
      .optional()
      .nullable(),
    isNot: z
      .lazy(() => PaymentAccountDetailsWhereInputObjectSchema)
      .optional()
      .nullable(),
  })
  .strict();

export const PaymentAccountDetailsRelationFilterObjectSchema = Schema;
