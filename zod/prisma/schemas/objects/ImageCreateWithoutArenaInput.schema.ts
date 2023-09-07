import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ImageCreateWithoutArenaInput> = z
  .object({
    publicUrl: z.string().optional().nullable(),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional(),
  })
  .strict();

export const ImageCreateWithoutArenaInputObjectSchema = Schema;
