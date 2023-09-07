import { z } from 'zod';
import { ArenaSectionCountOutputTypeSelectObjectSchema } from './ArenaSectionCountOutputTypeSelect.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ArenaSectionCountOutputTypeArgs> = z
  .object({
    select: z
      .lazy(() => ArenaSectionCountOutputTypeSelectObjectSchema)
      .optional(),
  })
  .strict();

export const ArenaSectionCountOutputTypeArgsObjectSchema = Schema;
