import { z } from 'zod';
import { UserCreateNestedOneWithoutPersonalDetailsInputObjectSchema } from './UserCreateNestedOneWithoutPersonalDetailsInput.schema';
import { LocationCreateNestedOneWithoutPersonalDetailsInputObjectSchema } from './LocationCreateNestedOneWithoutPersonalDetailsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PersonalDetailsCreateWithoutNameInput> = z
  .object({
    user: z.lazy(
      () => UserCreateNestedOneWithoutPersonalDetailsInputObjectSchema,
    ),
    location: z
      .lazy(
        () => LocationCreateNestedOneWithoutPersonalDetailsInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const PersonalDetailsCreateWithoutNameInputObjectSchema = Schema;
