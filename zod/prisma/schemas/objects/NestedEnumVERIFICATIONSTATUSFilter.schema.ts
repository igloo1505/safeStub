import { z } from 'zod';
import { VERIFICATIONSTATUSSchema } from '../enums/VERIFICATIONSTATUS.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.NestedEnumVERIFICATIONSTATUSFilter> = z
  .object({
    equals: z.lazy(() => VERIFICATIONSTATUSSchema).optional(),
    in: z
      .union([
        z.lazy(() => VERIFICATIONSTATUSSchema).array(),
        z.lazy(() => VERIFICATIONSTATUSSchema),
      ])
      .optional(),
    notIn: z
      .union([
        z.lazy(() => VERIFICATIONSTATUSSchema).array(),
        z.lazy(() => VERIFICATIONSTATUSSchema),
      ])
      .optional(),
    not: z
      .union([
        z.lazy(() => VERIFICATIONSTATUSSchema),
        z.lazy(() => NestedEnumVERIFICATIONSTATUSFilterObjectSchema),
      ])
      .optional(),
  })
  .strict();

export const NestedEnumVERIFICATIONSTATUSFilterObjectSchema = Schema;
