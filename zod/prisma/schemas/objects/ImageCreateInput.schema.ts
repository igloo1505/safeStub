import { z } from 'zod';
import { ArenaCreateNestedManyWithoutSectionImageInputObjectSchema } from './ArenaCreateNestedManyWithoutSectionImageInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ImageCreateInput> = z
  .object({
    publicUrl: z.string().optional().nullable(),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional(),
    Arena: z
      .lazy(() => ArenaCreateNestedManyWithoutSectionImageInputObjectSchema)
      .optional(),
  })
  .strict();

export const ImageCreateInputObjectSchema = Schema;
