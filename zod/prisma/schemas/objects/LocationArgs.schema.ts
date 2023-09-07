import { z } from 'zod';
import { LocationSelectObjectSchema } from './LocationSelect.schema';
import { LocationIncludeObjectSchema } from './LocationInclude.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.LocationArgs> = z
  .object({
    select: z.lazy(() => LocationSelectObjectSchema).optional(),
    include: z.lazy(() => LocationIncludeObjectSchema).optional(),
  })
  .strict();

export const LocationArgsObjectSchema = Schema;
