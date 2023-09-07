import { z } from 'zod';
import { ArenaFindManySchema } from '../findManyArena.schema';
import { ImageCountOutputTypeArgsObjectSchema } from './ImageCountOutputTypeArgs.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ImageSelect> = z
  .object({
    id: z.boolean().optional(),
    publicUrl: z.boolean().optional(),
    Arena: z.union([z.boolean(), z.lazy(() => ArenaFindManySchema)]).optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional(),
    _count: z
      .union([z.boolean(), z.lazy(() => ImageCountOutputTypeArgsObjectSchema)])
      .optional(),
  })
  .strict();

export const ImageSelectObjectSchema = Schema;
