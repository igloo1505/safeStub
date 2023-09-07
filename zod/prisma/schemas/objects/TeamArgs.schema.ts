import { z } from 'zod';
import { TeamSelectObjectSchema } from './TeamSelect.schema';
import { TeamIncludeObjectSchema } from './TeamInclude.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TeamArgs> = z
  .object({
    select: z.lazy(() => TeamSelectObjectSchema).optional(),
    include: z.lazy(() => TeamIncludeObjectSchema).optional(),
  })
  .strict();

export const TeamArgsObjectSchema = Schema;
