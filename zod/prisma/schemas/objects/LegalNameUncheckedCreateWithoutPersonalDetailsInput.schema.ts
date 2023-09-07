import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.LegalNameUncheckedCreateWithoutPersonalDetailsInput> =
  z
    .object({
      first: z.string(),
      middle: z.string().optional().nullable(),
      last: z.string(),
    })
    .strict();

export const LegalNameUncheckedCreateWithoutPersonalDetailsInputObjectSchema =
  Schema;
