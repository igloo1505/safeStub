import { z } from 'zod';
import { TransactionCreateWithoutBuyerInputObjectSchema } from './TransactionCreateWithoutBuyerInput.schema';
import { TransactionUncheckedCreateWithoutBuyerInputObjectSchema } from './TransactionUncheckedCreateWithoutBuyerInput.schema';
import { TransactionCreateOrConnectWithoutBuyerInputObjectSchema } from './TransactionCreateOrConnectWithoutBuyerInput.schema';
import { TransactionCreateManyBuyerInputEnvelopeObjectSchema } from './TransactionCreateManyBuyerInputEnvelope.schema';
import { TransactionWhereUniqueInputObjectSchema } from './TransactionWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TransactionCreateNestedManyWithoutBuyerInput> = z
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
    createMany: z
      .lazy(() => TransactionCreateManyBuyerInputEnvelopeObjectSchema)
      .optional(),
    connect: z
      .union([
        z.lazy(() => TransactionWhereUniqueInputObjectSchema),
        z.lazy(() => TransactionWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
  })
  .strict();

export const TransactionCreateNestedManyWithoutBuyerInputObjectSchema = Schema;
