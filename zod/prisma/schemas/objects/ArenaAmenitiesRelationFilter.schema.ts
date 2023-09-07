import { z } from 'zod';
import { ArenaAmenitiesWhereInputObjectSchema } from './ArenaAmenitiesWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ArenaAmenitiesRelationFilter> = z
  .object({
    is: z
      .lazy(() => ArenaAmenitiesWhereInputObjectSchema)
      .optional()
      .nullable(),
    isNot: z
      .lazy(() => ArenaAmenitiesWhereInputObjectSchema)
      .optional()
      .nullable(),
  })
  .strict();

export const ArenaAmenitiesRelationFilterObjectSchema = Schema;
