import { z } from 'zod';
import { TagCountOutputTypeSelectObjectSchema } from './TagCountOutputTypeSelect.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TagCountOutputTypeArgs> = z
  .object({
    select: z.lazy(() => TagCountOutputTypeSelectObjectSchema).optional(),
  })
  .strict();

export const TagCountOutputTypeArgsObjectSchema = Schema;
