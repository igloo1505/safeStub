import { z } from 'zod';
import { ArenaFindManySchema } from '../findManyArena.schema';
import { ImageCountOutputTypeArgsObjectSchema } from './ImageCountOutputTypeArgs.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ImageInclude> = z
  .object({
    Arena: z.union([z.boolean(), z.lazy(() => ArenaFindManySchema)]).optional(),
    _count: z
      .union([z.boolean(), z.lazy(() => ImageCountOutputTypeArgsObjectSchema)])
      .optional(),
  })
  .strict();

export const ImageIncludeObjectSchema = Schema;
