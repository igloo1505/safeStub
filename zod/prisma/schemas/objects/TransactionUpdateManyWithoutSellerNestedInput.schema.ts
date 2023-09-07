import { z } from 'zod';
import { TransactionCreateWithoutSellerInputObjectSchema } from './TransactionCreateWithoutSellerInput.schema';
import { TransactionUncheckedCreateWithoutSellerInputObjectSchema } from './TransactionUncheckedCreateWithoutSellerInput.schema';
import { TransactionCreateOrConnectWithoutSellerInputObjectSchema } from './TransactionCreateOrConnectWithoutSellerInput.schema';
import { TransactionUpsertWithWhereUniqueWithoutSellerInputObjectSchema } from './TransactionUpsertWithWhereUniqueWithoutSellerInput.schema';
import { TransactionCreateManySellerInputEnvelopeObjectSchema } from './TransactionCreateManySellerInputEnvelope.schema';
import { TransactionWhereUniqueInputObjectSchema } from './TransactionWhereUniqueInput.schema';
import { TransactionUpdateWithWhereUniqueWithoutSellerInputObjectSchema } from './TransactionUpdateWithWhereUniqueWithoutSellerInput.schema';
import { TransactionUpdateManyWithWhereWithoutSellerInputObjectSchema } from './TransactionUpdateManyWithWhereWithoutSellerInput.schema';
import { TransactionScalarWhereInputObjectSchema } from './TransactionScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TransactionUpdateManyWithoutSellerNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => TransactionCreateWithoutSellerInputObjectSchema),
          z.lazy(() => TransactionCreateWithoutSellerInputObjectSchema).array(),
          z.lazy(
            () => TransactionUncheckedCreateWithoutSellerInputObjectSchema,
          ),
          z
            .lazy(
              () => TransactionUncheckedCreateWithoutSellerInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(
            () => TransactionCreateOrConnectWithoutSellerInputObjectSchema,
          ),
          z
            .lazy(
              () => TransactionCreateOrConnectWithoutSellerInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      upsert: z
        .union([
          z.lazy(
            () =>
              TransactionUpsertWithWhereUniqueWithoutSellerInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                TransactionUpsertWithWhereUniqueWithoutSellerInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => TransactionCreateManySellerInputEnvelopeObjectSchema)
        .optional(),
      set: z
        .union([
          z.lazy(() => TransactionWhereUniqueInputObjectSchema),
          z.lazy(() => TransactionWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      disconnect: z
        .union([
          z.lazy(() => TransactionWhereUniqueInputObjectSchema),
          z.lazy(() => TransactionWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      delete: z
        .union([
          z.lazy(() => TransactionWhereUniqueInputObjectSchema),
          z.lazy(() => TransactionWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      connect: z
        .union([
          z.lazy(() => TransactionWhereUniqueInputObjectSchema),
          z.lazy(() => TransactionWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      update: z
        .union([
          z.lazy(
            () =>
              TransactionUpdateWithWhereUniqueWithoutSellerInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                TransactionUpdateWithWhereUniqueWithoutSellerInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(
            () => TransactionUpdateManyWithWhereWithoutSellerInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                TransactionUpdateManyWithWhereWithoutSellerInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      deleteMany: z
        .union([
          z.lazy(() => TransactionScalarWhereInputObjectSchema),
          z.lazy(() => TransactionScalarWhereInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const TransactionUpdateManyWithoutSellerNestedInputObjectSchema = Schema;
