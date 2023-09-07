import { z } from 'zod';
import { UserUpdateWithoutSettingsInputObjectSchema } from './UserUpdateWithoutSettingsInput.schema';
import { UserUncheckedUpdateWithoutSettingsInputObjectSchema } from './UserUncheckedUpdateWithoutSettingsInput.schema';
import { UserCreateWithoutSettingsInputObjectSchema } from './UserCreateWithoutSettingsInput.schema';
import { UserUncheckedCreateWithoutSettingsInputObjectSchema } from './UserUncheckedCreateWithoutSettingsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserUpsertWithoutSettingsInput> = z
  .object({
    update: z.union([
      z.lazy(() => UserUpdateWithoutSettingsInputObjectSchema),
      z.lazy(() => UserUncheckedUpdateWithoutSettingsInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => UserCreateWithoutSettingsInputObjectSchema),
      z.lazy(() => UserUncheckedCreateWithoutSettingsInputObjectSchema),
    ]),
  })
  .strict();

export const UserUpsertWithoutSettingsInputObjectSchema = Schema;
