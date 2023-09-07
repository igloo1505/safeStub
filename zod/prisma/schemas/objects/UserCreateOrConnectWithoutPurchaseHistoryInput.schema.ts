import { z } from 'zod';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserCreateWithoutPurchaseHistoryInputObjectSchema } from './UserCreateWithoutPurchaseHistoryInput.schema';
import { UserUncheckedCreateWithoutPurchaseHistoryInputObjectSchema } from './UserUncheckedCreateWithoutPurchaseHistoryInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserCreateOrConnectWithoutPurchaseHistoryInput> =
  z
    .object({
      where: z.lazy(() => UserWhereUniqueInputObjectSchema),
      create: z.union([
        z.lazy(() => UserCreateWithoutPurchaseHistoryInputObjectSchema),
        z.lazy(
          () => UserUncheckedCreateWithoutPurchaseHistoryInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const UserCreateOrConnectWithoutPurchaseHistoryInputObjectSchema =
  Schema;
