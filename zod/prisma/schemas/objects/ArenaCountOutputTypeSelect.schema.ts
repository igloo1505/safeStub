import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ArenaCountOutputTypeSelect> = z
  .object({
    events: z.boolean().optional(),
    sections: z.boolean().optional(),
    homeTeams: z.boolean().optional(),
  })
  .strict();

export const ArenaCountOutputTypeSelectObjectSchema = Schema;
