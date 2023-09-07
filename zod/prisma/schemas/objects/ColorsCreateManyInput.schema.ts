import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ColorsCreateManyInput> = z
  .object({
    id: z.number().optional(),
    primary: z.string(),
    secondary: z.string().optional().nullable(),
  })
  .strict();

export const ColorsCreateManyInputObjectSchema = Schema;
