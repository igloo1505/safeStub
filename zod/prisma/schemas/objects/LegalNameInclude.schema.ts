import { z } from 'zod';
import { PersonalDetailsArgsObjectSchema } from './PersonalDetailsArgs.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.LegalNameInclude> = z
  .object({
    personalDetails: z
      .union([z.boolean(), z.lazy(() => PersonalDetailsArgsObjectSchema)])
      .optional(),
  })
  .strict();

export const LegalNameIncludeObjectSchema = Schema;
