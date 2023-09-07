import { z } from 'zod';
import { TransactionUnboundSelectObjectSchema } from './TransactionUnboundSelect.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TransactionUnboundArgs> = z
  .object({
    select: z.lazy(() => TransactionUnboundSelectObjectSchema).optional(),
  })
  .strict();

export const TransactionUnboundArgsObjectSchema = Schema;
