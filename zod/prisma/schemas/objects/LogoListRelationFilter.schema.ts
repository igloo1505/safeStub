import { z } from 'zod';
import { LogoWhereInputObjectSchema } from './LogoWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.LogoListRelationFilter> = z
  .object({
    every: z.lazy(() => LogoWhereInputObjectSchema).optional(),
    some: z.lazy(() => LogoWhereInputObjectSchema).optional(),
    none: z.lazy(() => LogoWhereInputObjectSchema).optional(),
  })
  .strict();

export const LogoListRelationFilterObjectSchema = Schema;
