import { z } from 'zod';
import { ImageSelectObjectSchema } from './ImageSelect.schema';
import { ImageIncludeObjectSchema } from './ImageInclude.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ImageArgs> = z
  .object({
    select: z.lazy(() => ImageSelectObjectSchema).optional(),
    include: z.lazy(() => ImageIncludeObjectSchema).optional(),
  })
  .strict();

export const ImageArgsObjectSchema = Schema;
