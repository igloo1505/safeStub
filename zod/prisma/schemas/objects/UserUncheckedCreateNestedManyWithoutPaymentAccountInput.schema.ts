import { z } from 'zod';
import { UserCreateWithoutPaymentAccountInputObjectSchema } from './UserCreateWithoutPaymentAccountInput.schema';
import { UserUncheckedCreateWithoutPaymentAccountInputObjectSchema } from './UserUncheckedCreateWithoutPaymentAccountInput.schema';
import { UserCreateOrConnectWithoutPaymentAccountInputObjectSchema } from './UserCreateOrConnectWithoutPaymentAccountInput.schema';
import { UserCreateManyPaymentAccountInputEnvelopeObjectSchema } from './UserCreateManyPaymentAccountInputEnvelope.schema';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserUncheckedCreateNestedManyWithoutPaymentAccountInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => UserCreateWithoutPaymentAccountInputObjectSchema),
          z
            .lazy(() => UserCreateWithoutPaymentAccountInputObjectSchema)
            .array(),
          z.lazy(
            () => UserUncheckedCreateWithoutPaymentAccountInputObjectSchema,
          ),
          z
            .lazy(
              () => UserUncheckedCreateWithoutPaymentAccountInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(
            () => UserCreateOrConnectWithoutPaymentAccountInputObjectSchema,
          ),
          z
            .lazy(
              () => UserCreateOrConnectWithoutPaymentAccountInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => UserCreateManyPaymentAccountInputEnvelopeObjectSchema)
        .optional(),
      connect: z
        .union([
          z.lazy(() => UserWhereUniqueInputObjectSchema),
          z.lazy(() => UserWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const UserUncheckedCreateNestedManyWithoutPaymentAccountInputObjectSchema =
  Schema;
