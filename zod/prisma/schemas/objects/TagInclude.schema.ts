import { z } from 'zod';
import { EventFindManySchema } from '../findManyEvent.schema';
import { TagCountOutputTypeArgsObjectSchema } from './TagCountOutputTypeArgs.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TagInclude> = z
  .object({
    Event: z.union([z.boolean(), z.lazy(() => EventFindManySchema)]).optional(),
    _count: z
      .union([z.boolean(), z.lazy(() => TagCountOutputTypeArgsObjectSchema)])
      .optional(),
  })
  .strict();

export const TagIncludeObjectSchema = Schema;
