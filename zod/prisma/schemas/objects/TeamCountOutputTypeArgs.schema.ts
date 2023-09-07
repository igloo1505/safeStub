import { z } from 'zod';
import { TeamCountOutputTypeSelectObjectSchema } from './TeamCountOutputTypeSelect.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TeamCountOutputTypeArgs> = z
  .object({
    select: z.lazy(() => TeamCountOutputTypeSelectObjectSchema).optional(),
  })
  .strict();

export const TeamCountOutputTypeArgsObjectSchema = Schema;
