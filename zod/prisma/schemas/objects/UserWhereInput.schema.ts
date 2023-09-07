import { z } from 'zod';
import { IntFilterObjectSchema } from './IntFilter.schema';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { EnumROLEFilterObjectSchema } from './EnumROLEFilter.schema';
import { ROLESchema } from '../enums/ROLE.schema';
import { DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { IntNullableFilterObjectSchema } from './IntNullableFilter.schema';
import { EnumVERIFICATIONSTATUSFilterObjectSchema } from './EnumVERIFICATIONSTATUSFilter.schema';
import { VERIFICATIONSTATUSSchema } from '../enums/VERIFICATIONSTATUS.schema';
import { DateTimeNullableFilterObjectSchema } from './DateTimeNullableFilter.schema';
import { PaymentAccountDetailsRelationFilterObjectSchema } from './PaymentAccountDetailsRelationFilter.schema';
import { PaymentAccountDetailsWhereInputObjectSchema } from './PaymentAccountDetailsWhereInput.schema';
import { PurchaseHistoryRelationFilterObjectSchema } from './PurchaseHistoryRelationFilter.schema';
import { PurchaseHistoryWhereInputObjectSchema } from './PurchaseHistoryWhereInput.schema';
import { PersonalDetailsRelationFilterObjectSchema } from './PersonalDetailsRelationFilter.schema';
import { PersonalDetailsWhereInputObjectSchema } from './PersonalDetailsWhereInput.schema';
import { SettingsRelationFilterObjectSchema } from './SettingsRelationFilter.schema';
import { SettingsWhereInputObjectSchema } from './SettingsWhereInput.schema';
import { AccountListRelationFilterObjectSchema } from './AccountListRelationFilter.schema';
import { SessionListRelationFilterObjectSchema } from './SessionListRelationFilter.schema';

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
    id: z.union([z.lazy(() => IntFilterObjectSchema), z.number()]).optional(),
    email: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    password: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    role: z
      .union([
        z.lazy(() => EnumROLEFilterObjectSchema),
        z.lazy(() => ROLESchema),
      ])
      .optional(),
    createdAt: z
      .union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()])
      .optional(),
    paymentAccountDetailsId: z
      .union([z.lazy(() => IntNullableFilterObjectSchema), z.number()])
      .optional()
      .nullable(),
    IdVerified: z
      .union([
        z.lazy(() => EnumVERIFICATIONSTATUSFilterObjectSchema),
        z.lazy(() => VERIFICATIONSTATUSSchema),
      ])
      .optional(),
    emailVerified: z
      .union([
        z.lazy(() => DateTimeNullableFilterObjectSchema),
        z.coerce.date(),
      ])
      .optional()
      .nullable(),
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
    personalDetails: z
      .union([
        z.lazy(() => PersonalDetailsRelationFilterObjectSchema),
        z.lazy(() => PersonalDetailsWhereInputObjectSchema),
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
  })
  .strict();

export const UserWhereInputObjectSchema = Schema;
