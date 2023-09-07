import { z } from 'zod';
import { UserUpdateWithoutPurchaseHistoryInputObjectSchema } from './UserUpdateWithoutPurchaseHistoryInput.schema';
import { UserUncheckedUpdateWithoutPurchaseHistoryInputObjectSchema } from './UserUncheckedUpdateWithoutPurchaseHistoryInput.schema';
import { UserCreateWithoutPurchaseHistoryInputObjectSchema } from './UserCreateWithoutPurchaseHistoryInput.schema';
import { UserUncheckedCreateWithoutPurchaseHistoryInputObjectSchema } from './UserUncheckedCreateWithoutPurchaseHistoryInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserUpsertWithoutPurchaseHistoryInput> = z
  .object({
    update: z.union([
      z.lazy(() => UserUpdateWithoutPurchaseHistoryInputObjectSchema),
      z.lazy(() => UserUncheckedUpdateWithoutPurchaseHistoryInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => UserCreateWithoutPurchaseHistoryInputObjectSchema),
      z.lazy(() => UserUncheckedCreateWithoutPurchaseHistoryInputObjectSchema),
    ]),
  })
  .strict();

export const UserUpsertWithoutPurchaseHistoryInputObjectSchema = Schema;
