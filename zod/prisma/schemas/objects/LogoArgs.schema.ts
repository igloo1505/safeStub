import { z } from 'zod';
import { LogoSelectObjectSchema } from './LogoSelect.schema';
import { LogoIncludeObjectSchema } from './LogoInclude.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.LogoArgs> = z
  .object({
    select: z.lazy(() => LogoSelectObjectSchema).optional(),
    include: z.lazy(() => LogoIncludeObjectSchema).optional(),
  })
  .strict();

export const LogoArgsObjectSchema = Schema;
