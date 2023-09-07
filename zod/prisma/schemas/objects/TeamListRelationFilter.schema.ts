import { z } from 'zod';
import { TeamWhereInputObjectSchema } from './TeamWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TeamListRelationFilter> = z
  .object({
    every: z.lazy(() => TeamWhereInputObjectSchema).optional(),
    some: z.lazy(() => TeamWhereInputObjectSchema).optional(),
    none: z.lazy(() => TeamWhereInputObjectSchema).optional(),
  })
  .strict();

export const TeamListRelationFilterObjectSchema = Schema;
