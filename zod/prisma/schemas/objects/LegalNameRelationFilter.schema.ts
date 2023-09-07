import { z } from 'zod';
import { LegalNameWhereInputObjectSchema } from './LegalNameWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.LegalNameRelationFilter> = z
  .object({
    is: z
      .lazy(() => LegalNameWhereInputObjectSchema)
      .optional()
      .nullable(),
    isNot: z
      .lazy(() => LegalNameWhereInputObjectSchema)
      .optional()
      .nullable(),
  })
  .strict();

export const LegalNameRelationFilterObjectSchema = Schema;
