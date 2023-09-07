import { z } from 'zod';
import { UserCreateWithoutSettingsInputObjectSchema } from './UserCreateWithoutSettingsInput.schema';
import { UserUncheckedCreateWithoutSettingsInputObjectSchema } from './UserUncheckedCreateWithoutSettingsInput.schema';
import { UserCreateOrConnectWithoutSettingsInputObjectSchema } from './UserCreateOrConnectWithoutSettingsInput.schema';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserCreateNestedOneWithoutSettingsInput> = z
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
    connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional(),
  })
  .strict();

export const UserCreateNestedOneWithoutSettingsInputObjectSchema = Schema;
