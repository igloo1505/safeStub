import { z } from 'zod';
import { ColorsSelectObjectSchema } from './ColorsSelect.schema';
import { ColorsIncludeObjectSchema } from './ColorsInclude.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ColorsArgs> = z
  .object({
    select: z.lazy(() => ColorsSelectObjectSchema).optional(),
    include: z.lazy(() => ColorsIncludeObjectSchema).optional(),
  })
  .strict();

export const ColorsArgsObjectSchema = Schema;
