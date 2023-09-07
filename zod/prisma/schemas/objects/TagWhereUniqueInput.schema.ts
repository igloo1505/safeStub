import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TagWhereUniqueInput> = z
  .object({
    id: z.number().optional(),
    value: z.string().optional(),
  })
  .strict();

export const TagWhereUniqueInputObjectSchema = Schema;
