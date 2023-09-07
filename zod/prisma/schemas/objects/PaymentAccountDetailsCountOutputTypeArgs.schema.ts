import { z } from 'zod';
import { PaymentAccountDetailsCountOutputTypeSelectObjectSchema } from './PaymentAccountDetailsCountOutputTypeSelect.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PaymentAccountDetailsCountOutputTypeArgs> = z
  .object({
    select: z
      .lazy(() => PaymentAccountDetailsCountOutputTypeSelectObjectSchema)
      .optional(),
  })
  .strict();

export const PaymentAccountDetailsCountOutputTypeArgsObjectSchema = Schema;
