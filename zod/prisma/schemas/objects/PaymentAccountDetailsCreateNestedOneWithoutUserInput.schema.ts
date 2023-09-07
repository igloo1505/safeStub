import { z } from 'zod';
import { PaymentAccountDetailsCreateWithoutUserInputObjectSchema } from './PaymentAccountDetailsCreateWithoutUserInput.schema';
import { PaymentAccountDetailsUncheckedCreateWithoutUserInputObjectSchema } from './PaymentAccountDetailsUncheckedCreateWithoutUserInput.schema';
import { PaymentAccountDetailsCreateOrConnectWithoutUserInputObjectSchema } from './PaymentAccountDetailsCreateOrConnectWithoutUserInput.schema';
import { PaymentAccountDetailsWhereUniqueInputObjectSchema } from './PaymentAccountDetailsWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PaymentAccountDetailsCreateNestedOneWithoutUserInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => PaymentAccountDetailsCreateWithoutUserInputObjectSchema),
          z.lazy(
            () =>
              PaymentAccountDetailsUncheckedCreateWithoutUserInputObjectSchema,
          ),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(
          () =>
            PaymentAccountDetailsCreateOrConnectWithoutUserInputObjectSchema,
        )
        .optional(),
      connect: z
        .lazy(() => PaymentAccountDetailsWhereUniqueInputObjectSchema)
        .optional(),
    })
    .strict();

export const PaymentAccountDetailsCreateNestedOneWithoutUserInputObjectSchema =
  Schema;
