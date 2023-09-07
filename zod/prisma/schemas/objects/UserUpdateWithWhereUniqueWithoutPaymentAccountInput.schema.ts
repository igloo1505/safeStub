import { z } from 'zod';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserUpdateWithoutPaymentAccountInputObjectSchema } from './UserUpdateWithoutPaymentAccountInput.schema';
import { UserUncheckedUpdateWithoutPaymentAccountInputObjectSchema } from './UserUncheckedUpdateWithoutPaymentAccountInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserUpdateWithWhereUniqueWithoutPaymentAccountInput> =
  z
    .object({
      where: z.lazy(() => UserWhereUniqueInputObjectSchema),
      data: z.union([
        z.lazy(() => UserUpdateWithoutPaymentAccountInputObjectSchema),
        z.lazy(() => UserUncheckedUpdateWithoutPaymentAccountInputObjectSchema),
      ]),
    })
    .strict();

export const UserUpdateWithWhereUniqueWithoutPaymentAccountInputObjectSchema =
  Schema;
