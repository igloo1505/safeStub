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
import { PurchaseHistoryRelationFilterObjectSchema } from './PurchaseHistoryRelationFilter.schema';
import { PurchaseHistoryWhereInputObjectSchema } from './PurchaseHistoryWhereInput.schema';
import { TicketListRelationFilterObjectSchema } from './TicketListRelationFilter.schema';
import { TicketGroupListRelationFilterObjectSchema } from './TicketGroupListRelationFilter.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TransactionWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => TransactionWhereInputObjectSchema),
        z.lazy(() => TransactionWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => TransactionWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => TransactionWhereInputObjectSchema),
        z.lazy(() => TransactionWhereInputObjectSchema).array(),
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
    seller: z
      .union([
        z.lazy(() => PurchaseHistoryRelationFilterObjectSchema),
        z.lazy(() => PurchaseHistoryWhereInputObjectSchema),
      ])
      .optional(),
    buyer: z
      .union([
        z.lazy(() => PurchaseHistoryRelationFilterObjectSchema),
        z.lazy(() => PurchaseHistoryWhereInputObjectSchema),
      ])
      .optional()
      .nullable(),
    tickets: z.lazy(() => TicketListRelationFilterObjectSchema).optional(),
    ticketGroups: z
      .lazy(() => TicketGroupListRelationFilterObjectSchema)
      .optional(),
  })
  .strict();

export const TransactionWhereInputObjectSchema = Schema;
