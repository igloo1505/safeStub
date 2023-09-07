import { z } from 'zod';
import { PersonalDetailsArgsObjectSchema } from './PersonalDetailsArgs.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.LegalNameSelect> = z
  .object({
    first: z.boolean().optional(),
    middle: z.boolean().optional(),
    last: z.boolean().optional(),
    personalDetails: z
      .union([z.boolean(), z.lazy(() => PersonalDetailsArgsObjectSchema)])
      .optional(),
    detailsId: z.boolean().optional(),
  })
  .strict();

export const LegalNameSelectObjectSchema = Schema;
