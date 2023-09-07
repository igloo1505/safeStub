import { z } from 'zod';
import { UserUncheckedCreateNestedManyWithoutPaymentAccountInputObjectSchema } from './UserUncheckedCreateNestedManyWithoutPaymentAccountInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PaymentAccountDetailsUncheckedCreateInput> = z
  .object({
    id: z.number().optional(),
    nameOnAccount: z.string(),
    User: z
      .lazy(
        () =>
          UserUncheckedCreateNestedManyWithoutPaymentAccountInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const PaymentAccountDetailsUncheckedCreateInputObjectSchema = Schema;
