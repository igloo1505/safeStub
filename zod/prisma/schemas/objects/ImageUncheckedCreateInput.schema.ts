import { z } from 'zod';
import { ArenaUncheckedCreateNestedManyWithoutSectionImageInputObjectSchema } from './ArenaUncheckedCreateNestedManyWithoutSectionImageInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ImageUncheckedCreateInput> = z
  .object({
    id: z.number().optional(),
    publicUrl: z.string().optional().nullable(),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional(),
    Arena: z
      .lazy(
        () =>
          ArenaUncheckedCreateNestedManyWithoutSectionImageInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const ImageUncheckedCreateInputObjectSchema = Schema;
