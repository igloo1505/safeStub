import { z } from 'zod';
import { ArenaSectionWhereInputObjectSchema } from './ArenaSectionWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ArenaSectionRelationFilter> = z
  .object({
    is: z
      .lazy(() => ArenaSectionWhereInputObjectSchema)
      .optional()
      .nullable(),
    isNot: z
      .lazy(() => ArenaSectionWhereInputObjectSchema)
      .optional()
      .nullable(),
  })
  .strict();

export const ArenaSectionRelationFilterObjectSchema = Schema;
