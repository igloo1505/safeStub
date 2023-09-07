import { z } from 'zod';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserCreateWithoutPersonalDetailsInputObjectSchema } from './UserCreateWithoutPersonalDetailsInput.schema';
import { UserUncheckedCreateWithoutPersonalDetailsInputObjectSchema } from './UserUncheckedCreateWithoutPersonalDetailsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserCreateOrConnectWithoutPersonalDetailsInput> =
  z
    .object({
      where: z.lazy(() => UserWhereUniqueInputObjectSchema),
      create: z.union([
        z.lazy(() => UserCreateWithoutPersonalDetailsInputObjectSchema),
        z.lazy(
          () => UserUncheckedCreateWithoutPersonalDetailsInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const UserCreateOrConnectWithoutPersonalDetailsInputObjectSchema =
  Schema;
