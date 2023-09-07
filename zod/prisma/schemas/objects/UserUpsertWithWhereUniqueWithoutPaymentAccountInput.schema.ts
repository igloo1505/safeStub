import { z } from 'zod';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserUpdateWithoutPaymentAccountInputObjectSchema } from './UserUpdateWithoutPaymentAccountInput.schema';
import { UserUncheckedUpdateWithoutPaymentAccountInputObjectSchema } from './UserUncheckedUpdateWithoutPaymentAccountInput.schema';
import { UserCreateWithoutPaymentAccountInputObjectSchema } from './UserCreateWithoutPaymentAccountInput.schema';
import { UserUncheckedCreateWithoutPaymentAccountInputObjectSchema } from './UserUncheckedCreateWithoutPaymentAccountInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserUpsertWithWhereUniqueWithoutPaymentAccountInput> =
  z
    .object({
      where: z.lazy(() => UserWhereUniqueInputObjectSchema),
      update: z.union([
        z.lazy(() => UserUpdateWithoutPaymentAccountInputObjectSchema),
        z.lazy(() => UserUncheckedUpdateWithoutPaymentAccountInputObjectSchema),
      ]),
      create: z.union([
        z.lazy(() => UserCreateWithoutPaymentAccountInputObjectSchema),
        z.lazy(() => UserUncheckedCreateWithoutPaymentAccountInputObjectSchema),
      ]),
    })
    .strict();

export const UserUpsertWithWhereUniqueWithoutPaymentAccountInputObjectSchema =
  Schema;
