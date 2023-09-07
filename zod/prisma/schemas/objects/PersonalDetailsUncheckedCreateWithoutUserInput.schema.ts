import { z } from 'zod';
import { LegalNameUncheckedCreateNestedOneWithoutPersonalDetailsInputObjectSchema } from './LegalNameUncheckedCreateNestedOneWithoutPersonalDetailsInput.schema';
import { LocationUncheckedCreateNestedOneWithoutPersonalDetailsInputObjectSchema } from './LocationUncheckedCreateNestedOneWithoutPersonalDetailsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PersonalDetailsUncheckedCreateWithoutUserInput> =
  z
    .object({
      id: z.number().optional(),
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

export const PersonalDetailsUncheckedCreateWithoutUserInputObjectSchema =
  Schema;
