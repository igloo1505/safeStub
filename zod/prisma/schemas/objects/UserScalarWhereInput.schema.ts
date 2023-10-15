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

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserScalarWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => UserScalarWhereInputObjectSchema),
        z.lazy(() => UserScalarWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => UserScalarWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => UserScalarWhereInputObjectSchema),
        z.lazy(() => UserScalarWhereInputObjectSchema).array(),
      ])
      .optional(),
    id: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    name: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    firstName: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    lastName: z
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
    phone: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
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
  })
  .strict();

export const UserScalarWhereInputObjectSchema = Schema;
