import { z } from 'zod';
import { UserFindManySchema } from '../findManyUser.schema';
import { PaymentAccountDetailsCountOutputTypeArgsObjectSchema } from './PaymentAccountDetailsCountOutputTypeArgs.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PaymentAccountDetailsInclude> = z
  .object({
    User: z.union([z.boolean(), z.lazy(() => UserFindManySchema)]).optional(),
    _count: z
      .union([
        z.boolean(),
        z.lazy(() => PaymentAccountDetailsCountOutputTypeArgsObjectSchema),
      ])
      .optional(),
  })
  .strict();

export const PaymentAccountDetailsIncludeObjectSchema = Schema;
