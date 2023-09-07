import { z } from 'zod';
import { UserUpdateOneRequiredWithoutPersonalDetailsNestedInputObjectSchema } from './UserUpdateOneRequiredWithoutPersonalDetailsNestedInput.schema';
import { LocationUpdateOneWithoutPersonalDetailsNestedInputObjectSchema } from './LocationUpdateOneWithoutPersonalDetailsNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PersonalDetailsUpdateWithoutNameInput> = z
  .object({
    user: z
      .lazy(
        () =>
          UserUpdateOneRequiredWithoutPersonalDetailsNestedInputObjectSchema,
      )
      .optional(),
    location: z
      .lazy(
        () => LocationUpdateOneWithoutPersonalDetailsNestedInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const PersonalDetailsUpdateWithoutNameInputObjectSchema = Schema;
