import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ColorsCreateWithoutTeamInput> = z
  .object({
    primary: z.string(),
    secondary: z.string().optional().nullable(),
  })
  .strict();

export const ColorsCreateWithoutTeamInputObjectSchema = Schema;
