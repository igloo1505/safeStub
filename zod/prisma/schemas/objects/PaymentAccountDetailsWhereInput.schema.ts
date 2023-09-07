import { z } from 'zod';
import { IntFilterObjectSchema } from './IntFilter.schema';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { UserListRelationFilterObjectSchema } from './UserListRelationFilter.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PaymentAccountDetailsWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => PaymentAccountDetailsWhereInputObjectSchema),
        z.lazy(() => PaymentAccountDetailsWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => PaymentAccountDetailsWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => PaymentAccountDetailsWhereInputObjectSchema),
        z.lazy(() => PaymentAccountDetailsWhereInputObjectSchema).array(),
      ])
      .optional(),
    id: z.union([z.lazy(() => IntFilterObjectSchema), z.number()]).optional(),
    nameOnAccount: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    User: z.lazy(() => UserListRelationFilterObjectSchema).optional(),
  })
  .strict();

export const PaymentAccountDetailsWhereInputObjectSchema = Schema;
