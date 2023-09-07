import { z } from 'zod';
import { UserCreateNestedManyWithoutPaymentAccountInputObjectSchema } from './UserCreateNestedManyWithoutPaymentAccountInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PaymentAccountDetailsCreateInput> = z
  .object({
    nameOnAccount: z.string(),
    User: z
      .lazy(() => UserCreateNestedManyWithoutPaymentAccountInputObjectSchema)
      .optional(),
  })
  .strict();

export const PaymentAccountDetailsCreateInputObjectSchema = Schema;
