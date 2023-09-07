import { z } from 'zod';
import { ArenaCountOutputTypeSelectObjectSchema } from './ArenaCountOutputTypeSelect.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ArenaCountOutputTypeArgs> = z
  .object({
    select: z.lazy(() => ArenaCountOutputTypeSelectObjectSchema).optional(),
  })
  .strict();

export const ArenaCountOutputTypeArgsObjectSchema = Schema;
