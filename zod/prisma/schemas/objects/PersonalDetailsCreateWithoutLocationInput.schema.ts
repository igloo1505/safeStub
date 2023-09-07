import { z } from 'zod';
import { UserCreateNestedOneWithoutPersonalDetailsInputObjectSchema } from './UserCreateNestedOneWithoutPersonalDetailsInput.schema';
import { LegalNameCreateNestedOneWithoutPersonalDetailsInputObjectSchema } from './LegalNameCreateNestedOneWithoutPersonalDetailsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PersonalDetailsCreateWithoutLocationInput> = z
  .object({
    user: z.lazy(
      () => UserCreateNestedOneWithoutPersonalDetailsInputObjectSchema,
    ),
    name: z
      .lazy(
        () => LegalNameCreateNestedOneWithoutPersonalDetailsInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const PersonalDetailsCreateWithoutLocationInputObjectSchema = Schema;
