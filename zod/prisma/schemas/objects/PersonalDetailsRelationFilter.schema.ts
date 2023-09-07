import { z } from 'zod';
import { PersonalDetailsWhereInputObjectSchema } from './PersonalDetailsWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PersonalDetailsRelationFilter> = z
  .object({
    is: z
      .lazy(() => PersonalDetailsWhereInputObjectSchema)
      .optional()
      .nullable(),
    isNot: z
      .lazy(() => PersonalDetailsWhereInputObjectSchema)
      .optional()
      .nullable(),
  })
  .strict();

export const PersonalDetailsRelationFilterObjectSchema = Schema;
