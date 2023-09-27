import { z } from 'zod';
import { PAYOUTMETHODSSchema } from '../enums/PAYOUTMETHODS.schema';
import { UserUncheckedCreateNestedManyWithoutPaymentAccountInputObjectSchema } from './UserUncheckedCreateNestedManyWithoutPaymentAccountInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PaymentAccountDetailsUncheckedCreateInput> = z
  .object({
    id: z.number().optional(),
    nameOnAccount: z.string(),
    paymentMethodType: z.lazy(() => PAYOUTMETHODSSchema),
    User: z
      .lazy(
        () =>
          UserUncheckedCreateNestedManyWithoutPaymentAccountInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const PaymentAccountDetailsUncheckedCreateInputObjectSchema = Schema;
