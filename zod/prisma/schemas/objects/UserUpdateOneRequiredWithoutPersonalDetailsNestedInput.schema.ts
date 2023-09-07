import { z } from 'zod';
import { UserCreateWithoutPersonalDetailsInputObjectSchema } from './UserCreateWithoutPersonalDetailsInput.schema';
import { UserUncheckedCreateWithoutPersonalDetailsInputObjectSchema } from './UserUncheckedCreateWithoutPersonalDetailsInput.schema';
import { UserCreateOrConnectWithoutPersonalDetailsInputObjectSchema } from './UserCreateOrConnectWithoutPersonalDetailsInput.schema';
import { UserUpsertWithoutPersonalDetailsInputObjectSchema } from './UserUpsertWithoutPersonalDetailsInput.schema';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserUpdateWithoutPersonalDetailsInputObjectSchema } from './UserUpdateWithoutPersonalDetailsInput.schema';
import { UserUncheckedUpdateWithoutPersonalDetailsInputObjectSchema } from './UserUncheckedUpdateWithoutPersonalDetailsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserUpdateOneRequiredWithoutPersonalDetailsNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => UserCreateWithoutPersonalDetailsInputObjectSchema),
          z.lazy(
            () => UserUncheckedCreateWithoutPersonalDetailsInputObjectSchema,
          ),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(() => UserCreateOrConnectWithoutPersonalDetailsInputObjectSchema)
        .optional(),
      upsert: z
        .lazy(() => UserUpsertWithoutPersonalDetailsInputObjectSchema)
        .optional(),
      connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional(),
      update: z
        .union([
          z.lazy(() => UserUpdateWithoutPersonalDetailsInputObjectSchema),
          z.lazy(
            () => UserUncheckedUpdateWithoutPersonalDetailsInputObjectSchema,
          ),
        ])
        .optional(),
    })
    .strict();

export const UserUpdateOneRequiredWithoutPersonalDetailsNestedInputObjectSchema =
  Schema;
