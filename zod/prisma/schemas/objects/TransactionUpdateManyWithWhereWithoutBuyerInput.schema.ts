import { z } from 'zod';
import { TransactionScalarWhereInputObjectSchema } from './TransactionScalarWhereInput.schema';
import { TransactionUpdateManyMutationInputObjectSchema } from './TransactionUpdateManyMutationInput.schema';
import { TransactionUncheckedUpdateManyWithoutBoughtInputObjectSchema } from './TransactionUncheckedUpdateManyWithoutBoughtInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TransactionUpdateManyWithWhereWithoutBuyerInput> =
  z
    .object({
      where: z.lazy(() => TransactionScalarWhereInputObjectSchema),
      data: z.union([
        z.lazy(() => TransactionUpdateManyMutationInputObjectSchema),
        z.lazy(
          () => TransactionUncheckedUpdateManyWithoutBoughtInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const TransactionUpdateManyWithWhereWithoutBuyerInputObjectSchema =
  Schema;
