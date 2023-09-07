import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ArenaWhereUniqueInput> = z
  .object({
    id: z.number().optional(),
    uniqueKey: z.string().optional(),
    name: z.string().optional(),
  })
  .strict();

export const ArenaWhereUniqueInputObjectSchema = Schema;
