import { z } from 'zod';
import { PaymentAccountDetailsWhereUniqueInputObjectSchema } from './PaymentAccountDetailsWhereUniqueInput.schema';
import { PaymentAccountDetailsCreateWithoutUserInputObjectSchema } from './PaymentAccountDetailsCreateWithoutUserInput.schema';
import { PaymentAccountDetailsUncheckedCreateWithoutUserInputObjectSchema } from './PaymentAccountDetailsUncheckedCreateWithoutUserInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PaymentAccountDetailsCreateOrConnectWithoutUserInput> =
  z
    .object({
      where: z.lazy(() => PaymentAccountDetailsWhereUniqueInputObjectSchema),
      create: z.union([
        z.lazy(() => PaymentAccountDetailsCreateWithoutUserInputObjectSchema),
        z.lazy(
          () =>
            PaymentAccountDetailsUncheckedCreateWithoutUserInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const PaymentAccountDetailsCreateOrConnectWithoutUserInputObjectSchema =
  Schema;
