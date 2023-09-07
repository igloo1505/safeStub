import { z } from 'zod';
import { ROLESchema } from '../enums/ROLE.schema';
import { VERIFICATIONSTATUSSchema } from '../enums/VERIFICATIONSTATUS.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserCreateManyPaymentAccountInput> = z
  .object({
    id: z.number().optional(),
    email: z.string(),
    password: z.string(),
    role: z.lazy(() => ROLESchema).optional(),
    createdAt: z.coerce.date().optional(),
    IdVerified: z.lazy(() => VERIFICATIONSTATUSSchema).optional(),
    emailVerified: z.coerce.date().optional().nullable(),
  })
  .strict();

export const UserCreateManyPaymentAccountInputObjectSchema = Schema;
