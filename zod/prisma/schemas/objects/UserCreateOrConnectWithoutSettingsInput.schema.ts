import { z } from 'zod';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserCreateWithoutSettingsInputObjectSchema } from './UserCreateWithoutSettingsInput.schema';
import { UserUncheckedCreateWithoutSettingsInputObjectSchema } from './UserUncheckedCreateWithoutSettingsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserCreateOrConnectWithoutSettingsInput> = z
  .object({
    where: z.lazy(() => UserWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => UserCreateWithoutSettingsInputObjectSchema),
      z.lazy(() => UserUncheckedCreateWithoutSettingsInputObjectSchema),
    ]),
  })
  .strict();

export const UserCreateOrConnectWithoutSettingsInputObjectSchema = Schema;
