import { z } from 'zod';
import { ImageCountOutputTypeSelectObjectSchema } from './ImageCountOutputTypeSelect.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ImageCountOutputTypeArgs> = z
  .object({
    select: z.lazy(() => ImageCountOutputTypeSelectObjectSchema).optional(),
  })
  .strict();

export const ImageCountOutputTypeArgsObjectSchema = Schema;
