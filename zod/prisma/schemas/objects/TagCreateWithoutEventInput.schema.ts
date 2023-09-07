import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TagCreateWithoutEventInput> = z
  .object({
    value: z.string(),
  })
  .strict();

export const TagCreateWithoutEventInputObjectSchema = Schema;
