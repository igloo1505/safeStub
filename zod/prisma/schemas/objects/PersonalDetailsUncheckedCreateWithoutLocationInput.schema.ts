import { z } from 'zod';
import { LegalNameUncheckedCreateNestedOneWithoutPersonalDetailsInputObjectSchema } from './LegalNameUncheckedCreateNestedOneWithoutPersonalDetailsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PersonalDetailsUncheckedCreateWithoutLocationInput> =
  z
    .object({
      id: z.number().optional(),
      userId: z.number(),
      name: z
        .lazy(
          () =>
            LegalNameUncheckedCreateNestedOneWithoutPersonalDetailsInputObjectSchema,
        )
        .optional(),
    })
    .strict();

export const PersonalDetailsUncheckedCreateWithoutLocationInputObjectSchema =
  Schema;
