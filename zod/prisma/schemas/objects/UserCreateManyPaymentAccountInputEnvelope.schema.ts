import { z } from 'zod';
import { UserCreateManyPaymentAccountInputObjectSchema } from './UserCreateManyPaymentAccountInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserCreateManyPaymentAccountInputEnvelope> = z
  .object({
    data: z.union([
      z.lazy(() => UserCreateManyPaymentAccountInputObjectSchema),
      z.lazy(() => UserCreateManyPaymentAccountInputObjectSchema).array(),
    ]),
    skipDuplicates: z.boolean().optional(),
  })
  .strict();

export const UserCreateManyPaymentAccountInputEnvelopeObjectSchema = Schema;
