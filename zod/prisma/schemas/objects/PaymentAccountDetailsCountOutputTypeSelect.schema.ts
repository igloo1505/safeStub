import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PaymentAccountDetailsCountOutputTypeSelect> = z
  .object({
    User: z.boolean().optional(),
  })
  .strict();

export const PaymentAccountDetailsCountOutputTypeSelectObjectSchema = Schema;
