import { z } from 'zod';
import { LocationCountOutputTypeSelectObjectSchema } from './LocationCountOutputTypeSelect.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.LocationCountOutputTypeArgs> = z
  .object({
    select: z.lazy(() => LocationCountOutputTypeSelectObjectSchema).optional(),
  })
  .strict();

export const LocationCountOutputTypeArgsObjectSchema = Schema;
