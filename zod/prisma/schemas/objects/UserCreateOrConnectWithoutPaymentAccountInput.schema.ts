import { z } from 'zod';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserCreateWithoutPaymentAccountInputObjectSchema } from './UserCreateWithoutPaymentAccountInput.schema';
import { UserUncheckedCreateWithoutPaymentAccountInputObjectSchema } from './UserUncheckedCreateWithoutPaymentAccountInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserCreateOrConnectWithoutPaymentAccountInput> =
  z
    .object({
      where: z.lazy(() => UserWhereUniqueInputObjectSchema),
      create: z.union([
        z.lazy(() => UserCreateWithoutPaymentAccountInputObjectSchema),
        z.lazy(() => UserUncheckedCreateWithoutPaymentAccountInputObjectSchema),
      ]),
    })
    .strict();

export const UserCreateOrConnectWithoutPaymentAccountInputObjectSchema = Schema;
