import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.LocationWhereUniqueInput> = z
  .object({
    id: z.number().optional(),
    uniqueKey: z.string().optional(),
    userId: z.number().optional(),
  })
  .strict();

export const LocationWhereUniqueInputObjectSchema = Schema;
