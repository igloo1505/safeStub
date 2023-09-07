import { z } from 'zod';
import { TransactionWhereUniqueInputObjectSchema } from './TransactionWhereUniqueInput.schema';
import { TransactionCreateWithoutBuyerInputObjectSchema } from './TransactionCreateWithoutBuyerInput.schema';
import { TransactionUncheckedCreateWithoutBuyerInputObjectSchema } from './TransactionUncheckedCreateWithoutBuyerInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TransactionCreateOrConnectWithoutBuyerInput> = z
  .object({
    where: z.lazy(() => TransactionWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => TransactionCreateWithoutBuyerInputObjectSchema),
      z.lazy(() => TransactionUncheckedCreateWithoutBuyerInputObjectSchema),
    ]),
  })
  .strict();

export const TransactionCreateOrConnectWithoutBuyerInputObjectSchema = Schema;
