import { z } from 'zod';
import { PurchaseHistoryCreateWithoutSoldInputObjectSchema } from './PurchaseHistoryCreateWithoutSoldInput.schema';
import { PurchaseHistoryUncheckedCreateWithoutSoldInputObjectSchema } from './PurchaseHistoryUncheckedCreateWithoutSoldInput.schema';
import { PurchaseHistoryCreateOrConnectWithoutSoldInputObjectSchema } from './PurchaseHistoryCreateOrConnectWithoutSoldInput.schema';
import { PurchaseHistoryUpsertWithoutSoldInputObjectSchema } from './PurchaseHistoryUpsertWithoutSoldInput.schema';
import { PurchaseHistoryWhereUniqueInputObjectSchema } from './PurchaseHistoryWhereUniqueInput.schema';
import { PurchaseHistoryUpdateWithoutSoldInputObjectSchema } from './PurchaseHistoryUpdateWithoutSoldInput.schema';
import { PurchaseHistoryUncheckedUpdateWithoutSoldInputObjectSchema } from './PurchaseHistoryUncheckedUpdateWithoutSoldInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PurchaseHistoryUpdateOneRequiredWithoutSoldNestedInput> =
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
      upsert: z
        .lazy(() => PurchaseHistoryUpsertWithoutSoldInputObjectSchema)
        .optional(),
      connect: z
        .lazy(() => PurchaseHistoryWhereUniqueInputObjectSchema)
        .optional(),
      update: z
        .union([
          z.lazy(() => PurchaseHistoryUpdateWithoutSoldInputObjectSchema),
          z.lazy(
            () => PurchaseHistoryUncheckedUpdateWithoutSoldInputObjectSchema,
          ),
        ])
        .optional(),
    })
    .strict();

export const PurchaseHistoryUpdateOneRequiredWithoutSoldNestedInputObjectSchema =
  Schema;
