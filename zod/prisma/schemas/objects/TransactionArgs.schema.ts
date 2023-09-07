import { z } from 'zod';
import { TransactionSelectObjectSchema } from './TransactionSelect.schema';
import { TransactionIncludeObjectSchema } from './TransactionInclude.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TransactionArgs> = z
  .object({
    select: z.lazy(() => TransactionSelectObjectSchema).optional(),
    include: z.lazy(() => TransactionIncludeObjectSchema).optional(),
  })
  .strict();

export const TransactionArgsObjectSchema = Schema;
