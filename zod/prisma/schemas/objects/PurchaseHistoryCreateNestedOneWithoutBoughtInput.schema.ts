import { z } from 'zod';
import { PurchaseHistoryCreateWithoutBoughtInputObjectSchema } from './PurchaseHistoryCreateWithoutBoughtInput.schema';
import { PurchaseHistoryUncheckedCreateWithoutBoughtInputObjectSchema } from './PurchaseHistoryUncheckedCreateWithoutBoughtInput.schema';
import { PurchaseHistoryCreateOrConnectWithoutBoughtInputObjectSchema } from './PurchaseHistoryCreateOrConnectWithoutBoughtInput.schema';
import { PurchaseHistoryWhereUniqueInputObjectSchema } from './PurchaseHistoryWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PurchaseHistoryCreateNestedOneWithoutBoughtInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => PurchaseHistoryCreateWithoutBoughtInputObjectSchema),
          z.lazy(
            () => PurchaseHistoryUncheckedCreateWithoutBoughtInputObjectSchema,
          ),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(
          () => PurchaseHistoryCreateOrConnectWithoutBoughtInputObjectSchema,
        )
        .optional(),
      connect: z
        .lazy(() => PurchaseHistoryWhereUniqueInputObjectSchema)
        .optional(),
    })
    .strict();

export const PurchaseHistoryCreateNestedOneWithoutBoughtInputObjectSchema =
  Schema;
