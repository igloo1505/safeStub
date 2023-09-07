import { z } from 'zod';
import { TransactionFindManySchema } from '../findManyTransaction.schema';
import { UserArgsObjectSchema } from './UserArgs.schema';
import { PurchaseHistoryCountOutputTypeArgsObjectSchema } from './PurchaseHistoryCountOutputTypeArgs.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PurchaseHistoryInclude> = z
  .object({
    bought: z
      .union([z.boolean(), z.lazy(() => TransactionFindManySchema)])
      .optional(),
    sold: z
      .union([z.boolean(), z.lazy(() => TransactionFindManySchema)])
      .optional(),
    user: z.union([z.boolean(), z.lazy(() => UserArgsObjectSchema)]).optional(),
    _count: z
      .union([
        z.boolean(),
        z.lazy(() => PurchaseHistoryCountOutputTypeArgsObjectSchema),
      ])
      .optional(),
  })
  .strict();

export const PurchaseHistoryIncludeObjectSchema = Schema;
