import { z } from 'zod';
import { TransactionWhereUniqueInputObjectSchema } from './TransactionWhereUniqueInput.schema';
import { TransactionUpdateWithoutBuyerInputObjectSchema } from './TransactionUpdateWithoutBuyerInput.schema';
import { TransactionUncheckedUpdateWithoutBuyerInputObjectSchema } from './TransactionUncheckedUpdateWithoutBuyerInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TransactionUpdateWithWhereUniqueWithoutBuyerInput> =
  z
    .object({
      where: z.lazy(() => TransactionWhereUniqueInputObjectSchema),
      data: z.union([
        z.lazy(() => TransactionUpdateWithoutBuyerInputObjectSchema),
        z.lazy(() => TransactionUncheckedUpdateWithoutBuyerInputObjectSchema),
      ]),
    })
    .strict();

export const TransactionUpdateWithWhereUniqueWithoutBuyerInputObjectSchema =
  Schema;
