import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.LegalNameCreateManyInput> = z
  .object({
    first: z.string(),
    middle: z.string().optional().nullable(),
    last: z.string(),
    detailsId: z.number(),
  })
  .strict();

export const LegalNameCreateManyInputObjectSchema = Schema;
