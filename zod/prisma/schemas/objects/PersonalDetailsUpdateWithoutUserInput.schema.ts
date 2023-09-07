import { z } from 'zod';
import { LegalNameUpdateOneWithoutPersonalDetailsNestedInputObjectSchema } from './LegalNameUpdateOneWithoutPersonalDetailsNestedInput.schema';
import { LocationUpdateOneWithoutPersonalDetailsNestedInputObjectSchema } from './LocationUpdateOneWithoutPersonalDetailsNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PersonalDetailsUpdateWithoutUserInput> = z
  .object({
    name: z
      .lazy(
        () => LegalNameUpdateOneWithoutPersonalDetailsNestedInputObjectSchema,
      )
      .optional(),
    location: z
      .lazy(
        () => LocationUpdateOneWithoutPersonalDetailsNestedInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const PersonalDetailsUpdateWithoutUserInputObjectSchema = Schema;
