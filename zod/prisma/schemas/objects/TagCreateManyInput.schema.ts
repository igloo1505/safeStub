import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TagCreateManyInput> = z
  .object({
    id: z.number().optional(),
    value: z.string(),
  })
  .strict();

export const TagCreateManyInputObjectSchema = Schema;
