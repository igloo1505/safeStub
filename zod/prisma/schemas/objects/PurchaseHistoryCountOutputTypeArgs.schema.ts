import { z } from 'zod';
import { PurchaseHistoryCountOutputTypeSelectObjectSchema } from './PurchaseHistoryCountOutputTypeSelect.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PurchaseHistoryCountOutputTypeArgs> = z
  .object({
    select: z
      .lazy(() => PurchaseHistoryCountOutputTypeSelectObjectSchema)
      .optional(),
  })
  .strict();

export const PurchaseHistoryCountOutputTypeArgsObjectSchema = Schema;
