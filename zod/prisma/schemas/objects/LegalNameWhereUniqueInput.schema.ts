import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.LegalNameWhereUniqueInput> = z
  .object({
    detailsId: z.number().optional(),
  })
  .strict();

export const LegalNameWhereUniqueInputObjectSchema = Schema;
