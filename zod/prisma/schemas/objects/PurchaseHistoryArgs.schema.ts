import { z } from 'zod';
import { PurchaseHistorySelectObjectSchema } from './PurchaseHistorySelect.schema';
import { PurchaseHistoryIncludeObjectSchema } from './PurchaseHistoryInclude.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PurchaseHistoryArgs> = z
  .object({
    select: z.lazy(() => PurchaseHistorySelectObjectSchema).optional(),
    include: z.lazy(() => PurchaseHistoryIncludeObjectSchema).optional(),
  })
  .strict();

export const PurchaseHistoryArgsObjectSchema = Schema;
