import { z } from 'zod';
import { LegalNameCreateNestedOneWithoutPersonalDetailsInputObjectSchema } from './LegalNameCreateNestedOneWithoutPersonalDetailsInput.schema';
import { LocationCreateNestedOneWithoutPersonalDetailsInputObjectSchema } from './LocationCreateNestedOneWithoutPersonalDetailsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PersonalDetailsCreateWithoutUserInput> = z
  .object({
    name: z
      .lazy(
        () => LegalNameCreateNestedOneWithoutPersonalDetailsInputObjectSchema,
      )
      .optional(),
    location: z
      .lazy(
        () => LocationCreateNestedOneWithoutPersonalDetailsInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const PersonalDetailsCreateWithoutUserInputObjectSchema = Schema;
