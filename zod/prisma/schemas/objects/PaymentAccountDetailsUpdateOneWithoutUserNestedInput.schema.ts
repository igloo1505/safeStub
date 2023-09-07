import { z } from 'zod';
import { PaymentAccountDetailsCreateWithoutUserInputObjectSchema } from './PaymentAccountDetailsCreateWithoutUserInput.schema';
import { PaymentAccountDetailsUncheckedCreateWithoutUserInputObjectSchema } from './PaymentAccountDetailsUncheckedCreateWithoutUserInput.schema';
import { PaymentAccountDetailsCreateOrConnectWithoutUserInputObjectSchema } from './PaymentAccountDetailsCreateOrConnectWithoutUserInput.schema';
import { PaymentAccountDetailsUpsertWithoutUserInputObjectSchema } from './PaymentAccountDetailsUpsertWithoutUserInput.schema';
import { PaymentAccountDetailsWhereUniqueInputObjectSchema } from './PaymentAccountDetailsWhereUniqueInput.schema';
import { PaymentAccountDetailsUpdateWithoutUserInputObjectSchema } from './PaymentAccountDetailsUpdateWithoutUserInput.schema';
import { PaymentAccountDetailsUncheckedUpdateWithoutUserInputObjectSchema } from './PaymentAccountDetailsUncheckedUpdateWithoutUserInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PaymentAccountDetailsUpdateOneWithoutUserNestedInput> =
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
      upsert: z
        .lazy(() => PaymentAccountDetailsUpsertWithoutUserInputObjectSchema)
        .optional(),
      disconnect: z.boolean().optional(),
      delete: z.boolean().optional(),
      connect: z
        .lazy(() => PaymentAccountDetailsWhereUniqueInputObjectSchema)
        .optional(),
      update: z
        .union([
          z.lazy(() => PaymentAccountDetailsUpdateWithoutUserInputObjectSchema),
          z.lazy(
            () =>
              PaymentAccountDetailsUncheckedUpdateWithoutUserInputObjectSchema,
          ),
        ])
        .optional(),
    })
    .strict();

export const PaymentAccountDetailsUpdateOneWithoutUserNestedInputObjectSchema =
  Schema;
