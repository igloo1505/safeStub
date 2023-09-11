import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TeamCountOutputTypeSelect> = z
  .object({
    Event: z.boolean().optional(),
    logos: z.boolean().optional(),
  })
  .strict();

export const TeamCountOutputTypeSelectObjectSchema = Schema;
