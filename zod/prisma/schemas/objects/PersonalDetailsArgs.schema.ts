import { z } from 'zod';
import { PersonalDetailsSelectObjectSchema } from './PersonalDetailsSelect.schema';
import { PersonalDetailsIncludeObjectSchema } from './PersonalDetailsInclude.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PersonalDetailsArgs> = z
  .object({
    select: z.lazy(() => PersonalDetailsSelectObjectSchema).optional(),
    include: z.lazy(() => PersonalDetailsIncludeObjectSchema).optional(),
  })
  .strict();

export const PersonalDetailsArgsObjectSchema = Schema;
