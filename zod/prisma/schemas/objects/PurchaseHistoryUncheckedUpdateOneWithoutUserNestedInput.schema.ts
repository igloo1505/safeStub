import { z } from 'zod';
import { PurchaseHistoryCreateWithoutUserInputObjectSchema } from './PurchaseHistoryCreateWithoutUserInput.schema';
import { PurchaseHistoryUncheckedCreateWithoutUserInputObjectSchema } from './PurchaseHistoryUncheckedCreateWithoutUserInput.schema';
import { PurchaseHistoryCreateOrConnectWithoutUserInputObjectSchema } from './PurchaseHistoryCreateOrConnectWithoutUserInput.schema';
import { PurchaseHistoryUpsertWithoutUserInputObjectSchema } from './PurchaseHistoryUpsertWithoutUserInput.schema';
import { PurchaseHistoryWhereUniqueInputObjectSchema } from './PurchaseHistoryWhereUniqueInput.schema';
import { PurchaseHistoryUpdateWithoutUserInputObjectSchema } from './PurchaseHistoryUpdateWithoutUserInput.schema';
import { PurchaseHistoryUncheckedUpdateWithoutUserInputObjectSchema } from './PurchaseHistoryUncheckedUpdateWithoutUserInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PurchaseHistoryUncheckedUpdateOneWithoutUserNestedInput> =
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
      upsert: z
        .lazy(() => PurchaseHistoryUpsertWithoutUserInputObjectSchema)
        .optional(),
      disconnect: z.boolean().optional(),
      delete: z.boolean().optional(),
      connect: z
        .lazy(() => PurchaseHistoryWhereUniqueInputObjectSchema)
        .optional(),
      update: z
        .union([
          z.lazy(() => PurchaseHistoryUpdateWithoutUserInputObjectSchema),
          z.lazy(
            () => PurchaseHistoryUncheckedUpdateWithoutUserInputObjectSchema,
          ),
        ])
        .optional(),
    })
    .strict();

export const PurchaseHistoryUncheckedUpdateOneWithoutUserNestedInputObjectSchema =
  Schema;
