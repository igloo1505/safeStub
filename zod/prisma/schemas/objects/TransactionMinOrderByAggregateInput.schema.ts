import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TransactionMinOrderByAggregateInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    listedPrice: z.lazy(() => SortOrderSchema).optional(),
    sellerId: z.lazy(() => SortOrderSchema).optional(),
    buyerId: z.lazy(() => SortOrderSchema).optional(),
    status: z.lazy(() => SortOrderSchema).optional(),
    total: z.lazy(() => SortOrderSchema).optional(),
    payout: z.lazy(() => SortOrderSchema).optional(),
    payoutMethod: z.lazy(() => SortOrderSchema).optional(),
    postedOn: z.lazy(() => SortOrderSchema).optional(),
    purchasedOn: z.lazy(() => SortOrderSchema).optional(),
  })
  .strict();

export const TransactionMinOrderByAggregateInputObjectSchema = Schema;
