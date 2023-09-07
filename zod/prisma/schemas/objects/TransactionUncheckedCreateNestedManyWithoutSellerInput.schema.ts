import { z } from 'zod';
import { TransactionCreateWithoutSellerInputObjectSchema } from './TransactionCreateWithoutSellerInput.schema';
import { TransactionUncheckedCreateWithoutSellerInputObjectSchema } from './TransactionUncheckedCreateWithoutSellerInput.schema';
import { TransactionCreateOrConnectWithoutSellerInputObjectSchema } from './TransactionCreateOrConnectWithoutSellerInput.schema';
import { TransactionCreateManySellerInputEnvelopeObjectSchema } from './TransactionCreateManySellerInputEnvelope.schema';
import { TransactionWhereUniqueInputObjectSchema } from './TransactionWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TransactionUncheckedCreateNestedManyWithoutSellerInput> =
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
      createMany: z
        .lazy(() => TransactionCreateManySellerInputEnvelopeObjectSchema)
        .optional(),
      connect: z
        .union([
          z.lazy(() => TransactionWhereUniqueInputObjectSchema),
          z.lazy(() => TransactionWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const TransactionUncheckedCreateNestedManyWithoutSellerInputObjectSchema =
  Schema;
