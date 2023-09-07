import { z } from 'zod';
import { ArenaAmenitiesSelectObjectSchema } from './ArenaAmenitiesSelect.schema';
import { ArenaAmenitiesIncludeObjectSchema } from './ArenaAmenitiesInclude.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ArenaAmenitiesArgs> = z
  .object({
    select: z.lazy(() => ArenaAmenitiesSelectObjectSchema).optional(),
    include: z.lazy(() => ArenaAmenitiesIncludeObjectSchema).optional(),
  })
  .strict();

export const ArenaAmenitiesArgsObjectSchema = Schema;
