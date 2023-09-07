import { z } from 'zod';
import { ROLESchema } from '../enums/ROLE.schema';
import { VERIFICATIONSTATUSSchema } from '../enums/VERIFICATIONSTATUS.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserCreateManyPaymentAccountInput> = z
  .object({
    id: z.string().optional(),
    name: z.string().optional().nullable(),
    role: z.lazy(() => ROLESchema).optional(),
    createdAt: z.coerce.date().optional(),
    email: z.string().optional().nullable(),
    emailVerified: z.coerce.date().optional().nullable(),
    image: z.string().optional().nullable(),
    idVerified: z.lazy(() => VERIFICATIONSTATUSSchema).optional(),
  })
  .strict();

export const UserCreateManyPaymentAccountInputObjectSchema = Schema;
