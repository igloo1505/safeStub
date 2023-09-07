import { z } from 'zod';
import { UserCreateWithoutPurchaseHistoryInputObjectSchema } from './UserCreateWithoutPurchaseHistoryInput.schema';
import { UserUncheckedCreateWithoutPurchaseHistoryInputObjectSchema } from './UserUncheckedCreateWithoutPurchaseHistoryInput.schema';
import { UserCreateOrConnectWithoutPurchaseHistoryInputObjectSchema } from './UserCreateOrConnectWithoutPurchaseHistoryInput.schema';
import { UserUpsertWithoutPurchaseHistoryInputObjectSchema } from './UserUpsertWithoutPurchaseHistoryInput.schema';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserUpdateWithoutPurchaseHistoryInputObjectSchema } from './UserUpdateWithoutPurchaseHistoryInput.schema';
import { UserUncheckedUpdateWithoutPurchaseHistoryInputObjectSchema } from './UserUncheckedUpdateWithoutPurchaseHistoryInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserUpdateOneRequiredWithoutPurchaseHistoryNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => UserCreateWithoutPurchaseHistoryInputObjectSchema),
          z.lazy(
            () => UserUncheckedCreateWithoutPurchaseHistoryInputObjectSchema,
          ),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(() => UserCreateOrConnectWithoutPurchaseHistoryInputObjectSchema)
        .optional(),
      upsert: z
        .lazy(() => UserUpsertWithoutPurchaseHistoryInputObjectSchema)
        .optional(),
      connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional(),
      update: z
        .union([
          z.lazy(() => UserUpdateWithoutPurchaseHistoryInputObjectSchema),
          z.lazy(
            () => UserUncheckedUpdateWithoutPurchaseHistoryInputObjectSchema,
          ),
        ])
        .optional(),
    })
    .strict();

export const UserUpdateOneRequiredWithoutPurchaseHistoryNestedInputObjectSchema =
  Schema;
