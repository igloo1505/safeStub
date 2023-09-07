import { z } from 'zod';
import { ColorsCountOutputTypeSelectObjectSchema } from './ColorsCountOutputTypeSelect.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ColorsCountOutputTypeArgs> = z
  .object({
    select: z.lazy(() => ColorsCountOutputTypeSelectObjectSchema).optional(),
  })
  .strict();

export const ColorsCountOutputTypeArgsObjectSchema = Schema;
