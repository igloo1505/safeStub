import { z } from 'zod';
import { TransactionScalarWhereInputObjectSchema } from './TransactionScalarWhereInput.schema';
import { TransactionUpdateManyMutationInputObjectSchema } from './TransactionUpdateManyMutationInput.schema';
import { TransactionUncheckedUpdateManyWithoutSoldInputObjectSchema } from './TransactionUncheckedUpdateManyWithoutSoldInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TransactionUpdateManyWithWhereWithoutSellerInput> =
  z
    .object({
      where: z.lazy(() => TransactionScalarWhereInputObjectSchema),
      data: z.union([
        z.lazy(() => TransactionUpdateManyMutationInputObjectSchema),
        z.lazy(
          () => TransactionUncheckedUpdateManyWithoutSoldInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const TransactionUpdateManyWithWhereWithoutSellerInputObjectSchema =
  Schema;
