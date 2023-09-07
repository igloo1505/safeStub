import { z } from 'zod';
import { UserCreateWithoutPurchaseHistoryInputObjectSchema } from './UserCreateWithoutPurchaseHistoryInput.schema';
import { UserUncheckedCreateWithoutPurchaseHistoryInputObjectSchema } from './UserUncheckedCreateWithoutPurchaseHistoryInput.schema';
import { UserCreateOrConnectWithoutPurchaseHistoryInputObjectSchema } from './UserCreateOrConnectWithoutPurchaseHistoryInput.schema';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserCreateNestedOneWithoutPurchaseHistoryInput> =
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
      connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional(),
    })
    .strict();

export const UserCreateNestedOneWithoutPurchaseHistoryInputObjectSchema =
  Schema;
