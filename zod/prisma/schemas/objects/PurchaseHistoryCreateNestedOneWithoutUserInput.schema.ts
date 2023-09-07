import { z } from 'zod';
import { PurchaseHistoryCreateWithoutUserInputObjectSchema } from './PurchaseHistoryCreateWithoutUserInput.schema';
import { PurchaseHistoryUncheckedCreateWithoutUserInputObjectSchema } from './PurchaseHistoryUncheckedCreateWithoutUserInput.schema';
import { PurchaseHistoryCreateOrConnectWithoutUserInputObjectSchema } from './PurchaseHistoryCreateOrConnectWithoutUserInput.schema';
import { PurchaseHistoryWhereUniqueInputObjectSchema } from './PurchaseHistoryWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PurchaseHistoryCreateNestedOneWithoutUserInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => PurchaseHistoryCreateWithoutUserInputObjectSchema),
          z.lazy(
            () => PurchaseHistoryUncheckedCreateWithoutUserInputObjectSchema,
          ),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(() => PurchaseHistoryCreateOrConnectWithoutUserInputObjectSchema)
        .optional(),
      connect: z
        .lazy(() => PurchaseHistoryWhereUniqueInputObjectSchema)
        .optional(),
    })
    .strict();

export const PurchaseHistoryCreateNestedOneWithoutUserInputObjectSchema =
  Schema;
