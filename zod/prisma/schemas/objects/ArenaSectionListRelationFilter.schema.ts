import { z } from 'zod';
import { ArenaSectionWhereInputObjectSchema } from './ArenaSectionWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ArenaSectionListRelationFilter> = z
  .object({
    every: z.lazy(() => ArenaSectionWhereInputObjectSchema).optional(),
    some: z.lazy(() => ArenaSectionWhereInputObjectSchema).optional(),
    none: z.lazy(() => ArenaSectionWhereInputObjectSchema).optional(),
  })
  .strict();

export const ArenaSectionListRelationFilterObjectSchema = Schema;
