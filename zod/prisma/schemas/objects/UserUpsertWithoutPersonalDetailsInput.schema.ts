import { z } from 'zod';
import { UserUpdateWithoutPersonalDetailsInputObjectSchema } from './UserUpdateWithoutPersonalDetailsInput.schema';
import { UserUncheckedUpdateWithoutPersonalDetailsInputObjectSchema } from './UserUncheckedUpdateWithoutPersonalDetailsInput.schema';
import { UserCreateWithoutPersonalDetailsInputObjectSchema } from './UserCreateWithoutPersonalDetailsInput.schema';
import { UserUncheckedCreateWithoutPersonalDetailsInputObjectSchema } from './UserUncheckedCreateWithoutPersonalDetailsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserUpsertWithoutPersonalDetailsInput> = z
  .object({
    update: z.union([
      z.lazy(() => UserUpdateWithoutPersonalDetailsInputObjectSchema),
      z.lazy(() => UserUncheckedUpdateWithoutPersonalDetailsInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => UserCreateWithoutPersonalDetailsInputObjectSchema),
      z.lazy(() => UserUncheckedCreateWithoutPersonalDetailsInputObjectSchema),
    ]),
  })
  .strict();

export const UserUpsertWithoutPersonalDetailsInputObjectSchema = Schema;
