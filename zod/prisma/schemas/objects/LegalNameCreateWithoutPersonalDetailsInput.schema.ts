import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.LegalNameCreateWithoutPersonalDetailsInput> = z
  .object({
    first: z.string(),
    middle: z.string().optional().nullable(),
    last: z.string(),
  })
  .strict();

export const LegalNameCreateWithoutPersonalDetailsInputObjectSchema = Schema;
