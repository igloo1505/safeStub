import { z } from 'zod';
import { TransactionWhereUniqueInputObjectSchema } from './TransactionWhereUniqueInput.schema';
import { TransactionUpdateWithoutBuyerInputObjectSchema } from './TransactionUpdateWithoutBuyerInput.schema';
import { TransactionUncheckedUpdateWithoutBuyerInputObjectSchema } from './TransactionUncheckedUpdateWithoutBuyerInput.schema';
import { TransactionCreateWithoutBuyerInputObjectSchema } from './TransactionCreateWithoutBuyerInput.schema';
import { TransactionUncheckedCreateWithoutBuyerInputObjectSchema } from './TransactionUncheckedCreateWithoutBuyerInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TransactionUpsertWithWhereUniqueWithoutBuyerInput> =
  z
    .object({
      where: z.lazy(() => TransactionWhereUniqueInputObjectSchema),
      update: z.union([
        z.lazy(() => TransactionUpdateWithoutBuyerInputObjectSchema),
        z.lazy(() => TransactionUncheckedUpdateWithoutBuyerInputObjectSchema),
      ]),
      create: z.union([
        z.lazy(() => TransactionCreateWithoutBuyerInputObjectSchema),
        z.lazy(() => TransactionUncheckedCreateWithoutBuyerInputObjectSchema),
      ]),
    })
    .strict();

export const TransactionUpsertWithWhereUniqueWithoutBuyerInputObjectSchema =
  Schema;
