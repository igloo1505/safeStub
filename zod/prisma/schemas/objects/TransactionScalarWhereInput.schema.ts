import { z } from 'zod';
import { IntFilterObjectSchema } from './IntFilter.schema';
import { FloatFilterObjectSchema } from './FloatFilter.schema';
import { IntNullableFilterObjectSchema } from './IntNullableFilter.schema';
import { EnumTRANSACTIONSTATUSFilterObjectSchema } from './EnumTRANSACTIONSTATUSFilter.schema';
import { TRANSACTIONSTATUSSchema } from '../enums/TRANSACTIONSTATUS.schema';
import { EnumPAYOUTMETHODSFilterObjectSchema } from './EnumPAYOUTMETHODSFilter.schema';
import { PAYOUTMETHODSSchema } from '../enums/PAYOUTMETHODS.schema';
import { DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { DateTimeNullableFilterObjectSchema } from './DateTimeNullableFilter.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TransactionScalarWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => TransactionScalarWhereInputObjectSchema),
        z.lazy(() => TransactionScalarWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => TransactionScalarWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => TransactionScalarWhereInputObjectSchema),
        z.lazy(() => TransactionScalarWhereInputObjectSchema).array(),
      ])
      .optional(),
    id: z.union([z.lazy(() => IntFilterObjectSchema), z.number()]).optional(),
    listedPrice: z
      .union([z.lazy(() => FloatFilterObjectSchema), z.number()])
      .optional(),
    sellerId: z
      .union([z.lazy(() => IntFilterObjectSchema), z.number()])
      .optional(),
    buyerId: z
      .union([z.lazy(() => IntNullableFilterObjectSchema), z.number()])
      .optional()
      .nullable(),
    status: z
      .union([
        z.lazy(() => EnumTRANSACTIONSTATUSFilterObjectSchema),
        z.lazy(() => TRANSACTIONSTATUSSchema),
      ])
      .optional(),
    total: z
      .union([z.lazy(() => FloatFilterObjectSchema), z.number()])
      .optional(),
    payout: z
      .union([z.lazy(() => FloatFilterObjectSchema), z.number()])
      .optional(),
    payoutMethod: z
      .union([
        z.lazy(() => EnumPAYOUTMETHODSFilterObjectSchema),
        z.lazy(() => PAYOUTMETHODSSchema),
      ])
      .optional(),
    postedOn: z
      .union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()])
      .optional(),
    purchasedOn: z
      .union([
        z.lazy(() => DateTimeNullableFilterObjectSchema),
        z.coerce.date(),
      ])
      .optional()
      .nullable(),
  })
  .strict();

export const TransactionScalarWhereInputObjectSchema = Schema;
