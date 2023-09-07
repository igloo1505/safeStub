import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PaymentAccountDetailsUncheckedCreateWithoutUserInput> =
  z
    .object({
      id: z.number().optional(),
      nameOnAccount: z.string(),
    })
    .strict();

export const PaymentAccountDetailsUncheckedCreateWithoutUserInputObjectSchema =
  Schema;
