import { z } from 'zod';
import { PaymentAccountDetailsSelectObjectSchema } from './PaymentAccountDetailsSelect.schema';
import { PaymentAccountDetailsIncludeObjectSchema } from './PaymentAccountDetailsInclude.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PaymentAccountDetailsArgs> = z
  .object({
    select: z.lazy(() => PaymentAccountDetailsSelectObjectSchema).optional(),
    include: z.lazy(() => PaymentAccountDetailsIncludeObjectSchema).optional(),
  })
  .strict();

export const PaymentAccountDetailsArgsObjectSchema = Schema;
