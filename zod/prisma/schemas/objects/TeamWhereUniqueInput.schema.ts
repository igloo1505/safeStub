import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TeamWhereUniqueInput> = z
  .object({
    id: z.number().optional(),
    uniqueKey: z.string().optional(),
  })
  .strict();

export const TeamWhereUniqueInputObjectSchema = Schema;
