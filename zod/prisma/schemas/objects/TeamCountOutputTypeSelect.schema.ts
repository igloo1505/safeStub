import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TeamCountOutputTypeSelect> = z
  .object({
    logos: z.boolean().optional(),
  })
  .strict();

export const TeamCountOutputTypeSelectObjectSchema = Schema;
