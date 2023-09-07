import { z } from 'zod';
import { TransactionWhereUniqueInputObjectSchema } from './TransactionWhereUniqueInput.schema';
import { TransactionCreateWithoutSellerInputObjectSchema } from './TransactionCreateWithoutSellerInput.schema';
import { TransactionUncheckedCreateWithoutSellerInputObjectSchema } from './TransactionUncheckedCreateWithoutSellerInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TransactionCreateOrConnectWithoutSellerInput> = z
  .object({
    where: z.lazy(() => TransactionWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => TransactionCreateWithoutSellerInputObjectSchema),
      z.lazy(() => TransactionUncheckedCreateWithoutSellerInputObjectSchema),
    ]),
  })
  .strict();

export const TransactionCreateOrConnectWithoutSellerInputObjectSchema = Schema;
