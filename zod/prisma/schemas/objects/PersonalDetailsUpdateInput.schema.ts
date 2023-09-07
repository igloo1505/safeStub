import { z } from 'zod';
import { UserUpdateOneRequiredWithoutPersonalDetailsNestedInputObjectSchema } from './UserUpdateOneRequiredWithoutPersonalDetailsNestedInput.schema';
import { LegalNameUpdateOneWithoutPersonalDetailsNestedInputObjectSchema } from './LegalNameUpdateOneWithoutPersonalDetailsNestedInput.schema';
import { LocationUpdateOneWithoutPersonalDetailsNestedInputObjectSchema } from './LocationUpdateOneWithoutPersonalDetailsNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PersonalDetailsUpdateInput> = z
  .object({
    user: z
      .lazy(
        () =>
          UserUpdateOneRequiredWithoutPersonalDetailsNestedInputObjectSchema,
      )
      .optional(),
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

export const PersonalDetailsUpdateInputObjectSchema = Schema;
