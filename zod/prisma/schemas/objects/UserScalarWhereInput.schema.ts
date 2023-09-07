import { z } from 'zod';
import { IntFilterObjectSchema } from './IntFilter.schema';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { EnumROLEFilterObjectSchema } from './EnumROLEFilter.schema';
import { ROLESchema } from '../enums/ROLE.schema';
import { DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { IntNullableFilterObjectSchema } from './IntNullableFilter.schema';
import { EnumVERIFICATIONSTATUSFilterObjectSchema } from './EnumVERIFICATIONSTATUSFilter.schema';
import { VERIFICATIONSTATUSSchema } from '../enums/VERIFICATIONSTATUS.schema';

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
    verified: z
      .union([
        z.lazy(() => EnumVERIFICATIONSTATUSFilterObjectSchema),
        z.lazy(() => VERIFICATIONSTATUSSchema),
      ])
      .optional(),
  })
  .strict();

export const UserScalarWhereInputObjectSchema = Schema;
