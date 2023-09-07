import { z } from 'zod';
import { PurchaseHistoryCreateWithoutSoldInputObjectSchema } from './PurchaseHistoryCreateWithoutSoldInput.schema';
import { PurchaseHistoryUncheckedCreateWithoutSoldInputObjectSchema } from './PurchaseHistoryUncheckedCreateWithoutSoldInput.schema';
import { PurchaseHistoryCreateOrConnectWithoutSoldInputObjectSchema } from './PurchaseHistoryCreateOrConnectWithoutSoldInput.schema';
import { PurchaseHistoryWhereUniqueInputObjectSchema } from './PurchaseHistoryWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PurchaseHistoryCreateNestedOneWithoutSoldInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => PurchaseHistoryCreateWithoutSoldInputObjectSchema),
          z.lazy(
            () => PurchaseHistoryUncheckedCreateWithoutSoldInputObjectSchema,
          ),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(() => PurchaseHistoryCreateOrConnectWithoutSoldInputObjectSchema)
        .optional(),
      connect: z
        .lazy(() => PurchaseHistoryWhereUniqueInputObjectSchema)
        .optional(),
    })
    .strict();

export const PurchaseHistoryCreateNestedOneWithoutSoldInputObjectSchema =
  Schema;
