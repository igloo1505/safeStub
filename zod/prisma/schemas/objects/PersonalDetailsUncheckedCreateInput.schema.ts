import { z } from 'zod';
import { LegalNameUncheckedCreateNestedOneWithoutPersonalDetailsInputObjectSchema } from './LegalNameUncheckedCreateNestedOneWithoutPersonalDetailsInput.schema';
import { LocationUncheckedCreateNestedOneWithoutPersonalDetailsInputObjectSchema } from './LocationUncheckedCreateNestedOneWithoutPersonalDetailsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PersonalDetailsUncheckedCreateInput> = z
  .object({
    id: z.number().optional(),
    userId: z.number(),
    name: z
      .lazy(
        () =>
          LegalNameUncheckedCreateNestedOneWithoutPersonalDetailsInputObjectSchema,
      )
      .optional(),
    location: z
      .lazy(
        () =>
          LocationUncheckedCreateNestedOneWithoutPersonalDetailsInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const PersonalDetailsUncheckedCreateInputObjectSchema = Schema;
