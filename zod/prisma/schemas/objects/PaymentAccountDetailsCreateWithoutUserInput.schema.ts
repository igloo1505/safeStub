import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PaymentAccountDetailsCreateWithoutUserInput> = z
  .object({
    nameOnAccount: z.string(),
  })
  .strict();

export const PaymentAccountDetailsCreateWithoutUserInputObjectSchema = Schema;
