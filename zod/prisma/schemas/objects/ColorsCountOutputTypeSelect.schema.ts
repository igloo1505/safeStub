import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ColorsCountOutputTypeSelect> = z
  .object({
    Team: z.boolean().optional(),
  })
  .strict();

export const ColorsCountOutputTypeSelectObjectSchema = Schema;
