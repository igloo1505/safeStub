import { z } from 'zod';
import { ArenaSectionSelectObjectSchema } from './ArenaSectionSelect.schema';
import { ArenaSectionIncludeObjectSchema } from './ArenaSectionInclude.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ArenaSectionArgs> = z
  .object({
    select: z.lazy(() => ArenaSectionSelectObjectSchema).optional(),
    include: z.lazy(() => ArenaSectionIncludeObjectSchema).optional(),
  })
  .strict();

export const ArenaSectionArgsObjectSchema = Schema;
