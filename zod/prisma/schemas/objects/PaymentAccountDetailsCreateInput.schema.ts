import { z } from 'zod';
import { PAYOUTMETHODSSchema } from '../enums/PAYOUTMETHODS.schema';
import { UserCreateNestedManyWithoutPaymentAccountInputObjectSchema } from './UserCreateNestedManyWithoutPaymentAccountInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PaymentAccountDetailsCreateInput> = z
  .object({
    nameOnAccount: z.string(),
    paymentMethodType: z.lazy(() => PAYOUTMETHODSSchema),
    User: z
      .lazy(() => UserCreateNestedManyWithoutPaymentAccountInputObjectSchema)
      .optional(),
  })
  .strict();

export const PaymentAccountDetailsCreateInputObjectSchema = Schema;
