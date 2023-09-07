import { z } from 'zod';
import { UserUpdateOneRequiredWithoutPersonalDetailsNestedInputObjectSchema } from './UserUpdateOneRequiredWithoutPersonalDetailsNestedInput.schema';
import { LegalNameUpdateOneWithoutPersonalDetailsNestedInputObjectSchema } from './LegalNameUpdateOneWithoutPersonalDetailsNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PersonalDetailsUpdateWithoutLocationInput> = z
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
  })
  .strict();

export const PersonalDetailsUpdateWithoutLocationInputObjectSchema = Schema;
