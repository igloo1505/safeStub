import { z } from 'zod';
import { UserCreateWithoutPersonalDetailsInputObjectSchema } from './UserCreateWithoutPersonalDetailsInput.schema';
import { UserUncheckedCreateWithoutPersonalDetailsInputObjectSchema } from './UserUncheckedCreateWithoutPersonalDetailsInput.schema';
import { UserCreateOrConnectWithoutPersonalDetailsInputObjectSchema } from './UserCreateOrConnectWithoutPersonalDetailsInput.schema';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserCreateNestedOneWithoutPersonalDetailsInput> =
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
      connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional(),
    })
    .strict();

export const UserCreateNestedOneWithoutPersonalDetailsInputObjectSchema =
  Schema;
