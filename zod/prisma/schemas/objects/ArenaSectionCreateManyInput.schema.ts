import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ArenaSectionCreateManyInput> = z
  .object({
    id: z.number().optional(),
    name: z.string(),
    arenaId: z.number(),
  })
  .strict();

export const ArenaSectionCreateManyInputObjectSchema = Schema;
