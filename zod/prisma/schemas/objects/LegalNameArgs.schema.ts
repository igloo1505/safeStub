import { z } from 'zod';
import { LegalNameSelectObjectSchema } from './LegalNameSelect.schema';
import { LegalNameIncludeObjectSchema } from './LegalNameInclude.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.LegalNameArgs> = z
  .object({
    select: z.lazy(() => LegalNameSelectObjectSchema).optional(),
    include: z.lazy(() => LegalNameIncludeObjectSchema).optional(),
  })
  .strict();

export const LegalNameArgsObjectSchema = Schema;
