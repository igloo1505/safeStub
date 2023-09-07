import { z } from 'zod';
import { ColorsWhereInputObjectSchema } from './ColorsWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ColorsRelationFilter> = z
  .object({
    is: z
      .lazy(() => ColorsWhereInputObjectSchema)
      .optional()
      .nullable(),
    isNot: z
      .lazy(() => ColorsWhereInputObjectSchema)
      .optional()
      .nullable(),
  })
  .strict();

export const ColorsRelationFilterObjectSchema = Schema;
