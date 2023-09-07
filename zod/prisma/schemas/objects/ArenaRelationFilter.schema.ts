import { z } from 'zod';
import { ArenaWhereInputObjectSchema } from './ArenaWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ArenaRelationFilter> = z
  .object({
    is: z
      .lazy(() => ArenaWhereInputObjectSchema)
      .optional()
      .nullable(),
    isNot: z
      .lazy(() => ArenaWhereInputObjectSchema)
      .optional()
      .nullable(),
  })
  .strict();

export const ArenaRelationFilterObjectSchema = Schema;
