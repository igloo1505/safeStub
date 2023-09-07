import { z } from 'zod';
import { TransactionCreateWithoutBuyerInputObjectSchema } from './TransactionCreateWithoutBuyerInput.schema';
import { TransactionUncheckedCreateWithoutBuyerInputObjectSchema } from './TransactionUncheckedCreateWithoutBuyerInput.schema';
import { TransactionCreateOrConnectWithoutBuyerInputObjectSchema } from './TransactionCreateOrConnectWithoutBuyerInput.schema';
import { TransactionUpsertWithWhereUniqueWithoutBuyerInputObjectSchema } from './TransactionUpsertWithWhereUniqueWithoutBuyerInput.schema';
import { TransactionCreateManyBuyerInputEnvelopeObjectSchema } from './TransactionCreateManyBuyerInputEnvelope.schema';
import { TransactionWhereUniqueInputObjectSchema } from './TransactionWhereUniqueInput.schema';
import { TransactionUpdateWithWhereUniqueWithoutBuyerInputObjectSchema } from './TransactionUpdateWithWhereUniqueWithoutBuyerInput.schema';
import { TransactionUpdateManyWithWhereWithoutBuyerInputObjectSchema } from './TransactionUpdateManyWithWhereWithoutBuyerInput.schema';
import { TransactionScalarWhereInputObjectSchema } from './TransactionScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TransactionUpdateManyWithoutBuyerNestedInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => TransactionCreateWithoutBuyerInputObjectSchema),
        z.lazy(() => TransactionCreateWithoutBuyerInputObjectSchema).array(),
        z.lazy(() => TransactionUncheckedCreateWithoutBuyerInputObjectSchema),
        z
          .lazy(() => TransactionUncheckedCreateWithoutBuyerInputObjectSchema)
          .array(),
      ])
      .optional(),
    connectOrCreate: z
      .union([
        z.lazy(() => TransactionCreateOrConnectWithoutBuyerInputObjectSchema),
        z
          .lazy(() => TransactionCreateOrConnectWithoutBuyerInputObjectSchema)
          .array(),
      ])
      .optional(),
    upsert: z
      .union([
        z.lazy(
          () => TransactionUpsertWithWhereUniqueWithoutBuyerInputObjectSchema,
        ),
        z
          .lazy(
            () => TransactionUpsertWithWhereUniqueWithoutBuyerInputObjectSchema,
          )
          .array(),
      ])
      .optional(),
    createMany: z
      .lazy(() => TransactionCreateManyBuyerInputEnvelopeObjectSchema)
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
          () => TransactionUpdateWithWhereUniqueWithoutBuyerInputObjectSchema,
        ),
        z
          .lazy(
            () => TransactionUpdateWithWhereUniqueWithoutBuyerInputObjectSchema,
          )
          .array(),
      ])
      .optional(),
    updateMany: z
      .union([
        z.lazy(
          () => TransactionUpdateManyWithWhereWithoutBuyerInputObjectSchema,
        ),
        z
          .lazy(
            () => TransactionUpdateManyWithWhereWithoutBuyerInputObjectSchema,
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

export const TransactionUpdateManyWithoutBuyerNestedInputObjectSchema = Schema;
