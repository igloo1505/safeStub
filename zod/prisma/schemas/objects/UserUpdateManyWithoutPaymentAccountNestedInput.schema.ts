import { z } from 'zod';
import { UserCreateWithoutPaymentAccountInputObjectSchema } from './UserCreateWithoutPaymentAccountInput.schema';
import { UserUncheckedCreateWithoutPaymentAccountInputObjectSchema } from './UserUncheckedCreateWithoutPaymentAccountInput.schema';
import { UserCreateOrConnectWithoutPaymentAccountInputObjectSchema } from './UserCreateOrConnectWithoutPaymentAccountInput.schema';
import { UserUpsertWithWhereUniqueWithoutPaymentAccountInputObjectSchema } from './UserUpsertWithWhereUniqueWithoutPaymentAccountInput.schema';
import { UserCreateManyPaymentAccountInputEnvelopeObjectSchema } from './UserCreateManyPaymentAccountInputEnvelope.schema';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserUpdateWithWhereUniqueWithoutPaymentAccountInputObjectSchema } from './UserUpdateWithWhereUniqueWithoutPaymentAccountInput.schema';
import { UserUpdateManyWithWhereWithoutPaymentAccountInputObjectSchema } from './UserUpdateManyWithWhereWithoutPaymentAccountInput.schema';
import { UserScalarWhereInputObjectSchema } from './UserScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserUpdateManyWithoutPaymentAccountNestedInput> =
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
      upsert: z
        .union([
          z.lazy(
            () =>
              UserUpsertWithWhereUniqueWithoutPaymentAccountInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                UserUpsertWithWhereUniqueWithoutPaymentAccountInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => UserCreateManyPaymentAccountInputEnvelopeObjectSchema)
        .optional(),
      set: z
        .union([
          z.lazy(() => UserWhereUniqueInputObjectSchema),
          z.lazy(() => UserWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      disconnect: z
        .union([
          z.lazy(() => UserWhereUniqueInputObjectSchema),
          z.lazy(() => UserWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      delete: z
        .union([
          z.lazy(() => UserWhereUniqueInputObjectSchema),
          z.lazy(() => UserWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      connect: z
        .union([
          z.lazy(() => UserWhereUniqueInputObjectSchema),
          z.lazy(() => UserWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      update: z
        .union([
          z.lazy(
            () =>
              UserUpdateWithWhereUniqueWithoutPaymentAccountInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                UserUpdateWithWhereUniqueWithoutPaymentAccountInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(
            () => UserUpdateManyWithWhereWithoutPaymentAccountInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                UserUpdateManyWithWhereWithoutPaymentAccountInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      deleteMany: z
        .union([
          z.lazy(() => UserScalarWhereInputObjectSchema),
          z.lazy(() => UserScalarWhereInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const UserUpdateManyWithoutPaymentAccountNestedInputObjectSchema =
  Schema;
