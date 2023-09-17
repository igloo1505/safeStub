import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ArenaSectionCreateManyArenaInput> = z
  .object({
    id: z.number().optional(),
    name: z.string(),
    section: z.number(),
    row: z.number(),
  })
  .strict();

export const ArenaSectionCreateManyArenaInputObjectSchema = Schema;
