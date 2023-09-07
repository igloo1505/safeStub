import { z } from 'zod';
import { LocationUncheckedCreateNestedOneWithoutPersonalDetailsInputObjectSchema } from './LocationUncheckedCreateNestedOneWithoutPersonalDetailsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PersonalDetailsUncheckedCreateWithoutNameInput> =
  z
    .object({
      id: z.number().optional(),
      userId: z.number(),
      location: z
        .lazy(
          () =>
            LocationUncheckedCreateNestedOneWithoutPersonalDetailsInputObjectSchema,
        )
        .optional(),
    })
    .strict();

export const PersonalDetailsUncheckedCreateWithoutNameInputObjectSchema =
  Schema;
