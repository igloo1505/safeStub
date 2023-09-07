import { z } from 'zod';
import { PaymentAccountDetailsUpdateWithoutUserInputObjectSchema } from './PaymentAccountDetailsUpdateWithoutUserInput.schema';
import { PaymentAccountDetailsUncheckedUpdateWithoutUserInputObjectSchema } from './PaymentAccountDetailsUncheckedUpdateWithoutUserInput.schema';
import { PaymentAccountDetailsCreateWithoutUserInputObjectSchema } from './PaymentAccountDetailsCreateWithoutUserInput.schema';
import { PaymentAccountDetailsUncheckedCreateWithoutUserInputObjectSchema } from './PaymentAccountDetailsUncheckedCreateWithoutUserInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PaymentAccountDetailsUpsertWithoutUserInput> = z
  .object({
    update: z.union([
      z.lazy(() => PaymentAccountDetailsUpdateWithoutUserInputObjectSchema),
      z.lazy(
        () => PaymentAccountDetailsUncheckedUpdateWithoutUserInputObjectSchema,
      ),
    ]),
    create: z.union([
      z.lazy(() => PaymentAccountDetailsCreateWithoutUserInputObjectSchema),
      z.lazy(
        () => PaymentAccountDetailsUncheckedCreateWithoutUserInputObjectSchema,
      ),
    ]),
  })
  .strict();

export const PaymentAccountDetailsUpsertWithoutUserInputObjectSchema = Schema;
