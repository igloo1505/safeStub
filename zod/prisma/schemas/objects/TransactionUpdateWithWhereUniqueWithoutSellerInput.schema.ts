import { z } from 'zod';
import { TransactionWhereUniqueInputObjectSchema } from './TransactionWhereUniqueInput.schema';
import { TransactionUpdateWithoutSellerInputObjectSchema } from './TransactionUpdateWithoutSellerInput.schema';
import { TransactionUncheckedUpdateWithoutSellerInputObjectSchema } from './TransactionUncheckedUpdateWithoutSellerInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TransactionUpdateWithWhereUniqueWithoutSellerInput> =
  z
    .object({
      where: z.lazy(() => TransactionWhereUniqueInputObjectSchema),
      data: z.union([
        z.lazy(() => TransactionUpdateWithoutSellerInputObjectSchema),
        z.lazy(() => TransactionUncheckedUpdateWithoutSellerInputObjectSchema),
      ]),
    })
    .strict();

export const TransactionUpdateWithWhereUniqueWithoutSellerInputObjectSchema =
  Schema;
