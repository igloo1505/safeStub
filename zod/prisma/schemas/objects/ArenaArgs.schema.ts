import { z } from 'zod';
import { ArenaSelectObjectSchema } from './ArenaSelect.schema';
import { ArenaIncludeObjectSchema } from './ArenaInclude.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ArenaArgs> = z
  .object({
    select: z.lazy(() => ArenaSelectObjectSchema).optional(),
    include: z.lazy(() => ArenaIncludeObjectSchema).optional(),
  })
  .strict();

export const ArenaArgsObjectSchema = Schema;
