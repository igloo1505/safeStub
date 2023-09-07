import { z } from 'zod';
import { UserCreateNestedOneWithoutPersonalDetailsInputObjectSchema } from './UserCreateNestedOneWithoutPersonalDetailsInput.schema';
import { LegalNameCreateNestedOneWithoutPersonalDetailsInputObjectSchema } from './LegalNameCreateNestedOneWithoutPersonalDetailsInput.schema';
import { LocationCreateNestedOneWithoutPersonalDetailsInputObjectSchema } from './LocationCreateNestedOneWithoutPersonalDetailsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PersonalDetailsCreateInput> = z
  .object({
    user: z.lazy(
      () => UserCreateNestedOneWithoutPersonalDetailsInputObjectSchema,
    ),
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

export const PersonalDetailsCreateInputObjectSchema = Schema;
