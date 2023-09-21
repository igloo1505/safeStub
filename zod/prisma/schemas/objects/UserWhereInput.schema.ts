import { z } from 'zod';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { EnumROLEFilterObjectSchema } from './EnumROLEFilter.schema';
import { ROLESchema } from '../enums/ROLE.schema';
import { DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { DateTimeNullableFilterObjectSchema } from './DateTimeNullableFilter.schema';
import { IntNullableFilterObjectSchema } from './IntNullableFilter.schema';
import { EnumVERIFICATIONSTATUSFilterObjectSchema } from './EnumVERIFICATIONSTATUSFilter.schema';
import { VERIFICATIONSTATUSSchema } from '../enums/VERIFICATIONSTATUS.schema';
import { JsonNullableFilterObjectSchema } from './JsonNullableFilter.schema';
import { PaymentAccountDetailsRelationFilterObjectSchema } from './PaymentAccountDetailsRelationFilter.schema';
import { PaymentAccountDetailsWhereInputObjectSchema } from './PaymentAccountDetailsWhereInput.schema';
import { PurchaseHistoryRelationFilterObjectSchema } from './PurchaseHistoryRelationFilter.schema';
import { PurchaseHistoryWhereInputObjectSchema } from './PurchaseHistoryWhereInput.schema';
import { SettingsRelationFilterObjectSchema } from './SettingsRelationFilter.schema';
import { SettingsWhereInputObjectSchema } from './SettingsWhereInput.schema';
import { AccountListRelationFilterObjectSchema } from './AccountListRelationFilter.schema';
import { SessionListRelationFilterObjectSchema } from './SessionListRelationFilter.schema';
import { TicketGroupListRelationFilterObjectSchema } from './TicketGroupListRelationFilter.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => UserWhereInputObjectSchema),
        z.lazy(() => UserWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => UserWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => UserWhereInputObjectSchema),
        z.lazy(() => UserWhereInputObjectSchema).array(),
      ])
      .optional(),
    id: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    name: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    role: z
      .union([
        z.lazy(() => EnumROLEFilterObjectSchema),
        z.lazy(() => ROLESchema),
      ])
      .optional(),
    createdAt: z
      .union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()])
      .optional(),
    email: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    emailVerified: z
      .union([
        z.lazy(() => DateTimeNullableFilterObjectSchema),
        z.coerce.date(),
      ])
      .optional()
      .nullable(),
    image: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    paymentAccountDetailsId: z
      .union([z.lazy(() => IntNullableFilterObjectSchema), z.number()])
      .optional()
      .nullable(),
    idVerified: z
      .union([
        z.lazy(() => EnumVERIFICATIONSTATUSFilterObjectSchema),
        z.lazy(() => VERIFICATIONSTATUSSchema),
      ])
      .optional(),
    gcmSubscription: z.lazy(() => JsonNullableFilterObjectSchema).optional(),
    paymentAccount: z
      .union([
        z.lazy(() => PaymentAccountDetailsRelationFilterObjectSchema),
        z.lazy(() => PaymentAccountDetailsWhereInputObjectSchema),
      ])
      .optional()
      .nullable(),
    purchaseHistory: z
      .union([
        z.lazy(() => PurchaseHistoryRelationFilterObjectSchema),
        z.lazy(() => PurchaseHistoryWhereInputObjectSchema),
      ])
      .optional()
      .nullable(),
    settings: z
      .union([
        z.lazy(() => SettingsRelationFilterObjectSchema),
        z.lazy(() => SettingsWhereInputObjectSchema),
      ])
      .optional()
      .nullable(),
    accounts: z.lazy(() => AccountListRelationFilterObjectSchema).optional(),
    sessions: z.lazy(() => SessionListRelationFilterObjectSchema).optional(),
    ticketGroupsPurchased: z
      .lazy(() => TicketGroupListRelationFilterObjectSchema)
      .optional(),
    ticketGroupsSold: z
      .lazy(() => TicketGroupListRelationFilterObjectSchema)
      .optional(),
  })
  .strict();

export const UserWhereInputObjectSchema = Schema;
