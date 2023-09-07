import { z } from 'zod';
import { UserCreateWithoutSettingsInputObjectSchema } from './UserCreateWithoutSettingsInput.schema';
import { UserUncheckedCreateWithoutSettingsInputObjectSchema } from './UserUncheckedCreateWithoutSettingsInput.schema';
import { UserCreateOrConnectWithoutSettingsInputObjectSchema } from './UserCreateOrConnectWithoutSettingsInput.schema';
import { UserUpsertWithoutSettingsInputObjectSchema } from './UserUpsertWithoutSettingsInput.schema';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserUpdateWithoutSettingsInputObjectSchema } from './UserUpdateWithoutSettingsInput.schema';
import { UserUncheckedUpdateWithoutSettingsInputObjectSchema } from './UserUncheckedUpdateWithoutSettingsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserUpdateOneRequiredWithoutSettingsNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => UserCreateWithoutSettingsInputObjectSchema),
          z.lazy(() => UserUncheckedCreateWithoutSettingsInputObjectSchema),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(() => UserCreateOrConnectWithoutSettingsInputObjectSchema)
        .optional(),
      upsert: z
        .lazy(() => UserUpsertWithoutSettingsInputObjectSchema)
        .optional(),
      connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional(),
      update: z
        .union([
          z.lazy(() => UserUpdateWithoutSettingsInputObjectSchema),
          z.lazy(() => UserUncheckedUpdateWithoutSettingsInputObjectSchema),
        ])
        .optional(),
    })
    .strict();

export const UserUpdateOneRequiredWithoutSettingsNestedInputObjectSchema =
  Schema;
