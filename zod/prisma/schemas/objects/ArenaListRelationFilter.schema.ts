import { z } from 'zod';
import { ArenaWhereInputObjectSchema } from './ArenaWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ArenaListRelationFilter> = z
  .object({
    every: z.lazy(() => ArenaWhereInputObjectSchema).optional(),
    some: z.lazy(() => ArenaWhereInputObjectSchema).optional(),
    none: z.lazy(() => ArenaWhereInputObjectSchema).optional(),
  })
  .strict();

export const ArenaListRelationFilterObjectSchema = Schema;
