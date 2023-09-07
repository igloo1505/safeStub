import { z } from 'zod';
import { ROLESchema } from '../enums/ROLE.schema';
import { VERIFICATIONSTATUSSchema } from '../enums/VERIFICATIONSTATUS.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserCreateManyInput> = z
  .object({
    id: z.number().optional(),
    email: z.string(),
    password: z.string(),
    role: z.lazy(() => ROLESchema).optional(),
    createdAt: z.coerce.date().optional(),
    paymentAccountDetailsId: z.number().optional().nullable(),
    verified: z.lazy(() => VERIFICATIONSTATUSSchema).optional(),
  })
  .strict();

export const UserCreateManyInputObjectSchema = Schema;
