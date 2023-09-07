import { z } from 'zod';
import { UserFindManySchema } from '../findManyUser.schema';
import { PaymentAccountDetailsCountOutputTypeArgsObjectSchema } from './PaymentAccountDetailsCountOutputTypeArgs.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PaymentAccountDetailsSelect> = z
  .object({
    id: z.boolean().optional(),
    nameOnAccount: z.boolean().optional(),
    User: z.union([z.boolean(), z.lazy(() => UserFindManySchema)]).optional(),
    _count: z
      .union([
        z.boolean(),
        z.lazy(() => PaymentAccountDetailsCountOutputTypeArgsObjectSchema),
      ])
      .optional(),
  })
  .strict();

export const PaymentAccountDetailsSelectObjectSchema = Schema;
