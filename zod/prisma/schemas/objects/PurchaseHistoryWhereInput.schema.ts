import { z } from 'zod';
import { IntFilterObjectSchema } from './IntFilter.schema';
import { TransactionListRelationFilterObjectSchema } from './TransactionListRelationFilter.schema';
import { UserRelationFilterObjectSchema } from './UserRelationFilter.schema';
import { UserWhereInputObjectSchema } from './UserWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PurchaseHistoryWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => PurchaseHistoryWhereInputObjectSchema),
        z.lazy(() => PurchaseHistoryWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => PurchaseHistoryWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => PurchaseHistoryWhereInputObjectSchema),
        z.lazy(() => PurchaseHistoryWhereInputObjectSchema).array(),
      ])
      .optional(),
    id: z.union([z.lazy(() => IntFilterObjectSchema), z.number()]).optional(),
    userId: z
      .union([z.lazy(() => IntFilterObjectSchema), z.number()])
      .optional(),
    bought: z.lazy(() => TransactionListRelationFilterObjectSchema).optional(),
    sold: z.lazy(() => TransactionListRelationFilterObjectSchema).optional(),
    user: z
      .union([
        z.lazy(() => UserRelationFilterObjectSchema),
        z.lazy(() => UserWhereInputObjectSchema),
      ])
      .optional(),
  })
  .strict();

export const PurchaseHistoryWhereInputObjectSchema = Schema;
