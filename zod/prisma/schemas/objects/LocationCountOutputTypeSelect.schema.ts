import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.LocationCountOutputTypeSelect> = z
  .object({
    arena: z.boolean().optional(),
  })
  .strict();

export const LocationCountOutputTypeSelectObjectSchema = Schema;
