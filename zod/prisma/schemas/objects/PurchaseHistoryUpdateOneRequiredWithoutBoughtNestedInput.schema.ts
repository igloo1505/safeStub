import { z } from 'zod';
import { PurchaseHistoryCreateWithoutBoughtInputObjectSchema } from './PurchaseHistoryCreateWithoutBoughtInput.schema';
import { PurchaseHistoryUncheckedCreateWithoutBoughtInputObjectSchema } from './PurchaseHistoryUncheckedCreateWithoutBoughtInput.schema';
import { PurchaseHistoryCreateOrConnectWithoutBoughtInputObjectSchema } from './PurchaseHistoryCreateOrConnectWithoutBoughtInput.schema';
import { PurchaseHistoryUpsertWithoutBoughtInputObjectSchema } from './PurchaseHistoryUpsertWithoutBoughtInput.schema';
import { PurchaseHistoryWhereUniqueInputObjectSchema } from './PurchaseHistoryWhereUniqueInput.schema';
import { PurchaseHistoryUpdateWithoutBoughtInputObjectSchema } from './PurchaseHistoryUpdateWithoutBoughtInput.schema';
import { PurchaseHistoryUncheckedUpdateWithoutBoughtInputObjectSchema } from './PurchaseHistoryUncheckedUpdateWithoutBoughtInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PurchaseHistoryUpdateOneRequiredWithoutBoughtNestedInput> =
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
      upsert: z
        .lazy(() => PurchaseHistoryUpsertWithoutBoughtInputObjectSchema)
        .optional(),
      connect: z
        .lazy(() => PurchaseHistoryWhereUniqueInputObjectSchema)
        .optional(),
      update: z
        .union([
          z.lazy(() => PurchaseHistoryUpdateWithoutBoughtInputObjectSchema),
          z.lazy(
            () => PurchaseHistoryUncheckedUpdateWithoutBoughtInputObjectSchema,
          ),
        ])
        .optional(),
    })
    .strict();

export const PurchaseHistoryUpdateOneRequiredWithoutBoughtNestedInputObjectSchema =
  Schema;
