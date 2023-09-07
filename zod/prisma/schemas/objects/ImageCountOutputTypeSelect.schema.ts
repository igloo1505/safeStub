import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ImageCountOutputTypeSelect> = z
  .object({
    Arena: z.boolean().optional(),
  })
  .strict();

export const ImageCountOutputTypeSelectObjectSchema = Schema;
