import { z } from 'zod';
import { PersonalDetailsCreateWithoutUserInputObjectSchema } from './PersonalDetailsCreateWithoutUserInput.schema';
import { PersonalDetailsUncheckedCreateWithoutUserInputObjectSchema } from './PersonalDetailsUncheckedCreateWithoutUserInput.schema';
import { PersonalDetailsCreateOrConnectWithoutUserInputObjectSchema } from './PersonalDetailsCreateOrConnectWithoutUserInput.schema';
import { PersonalDetailsWhereUniqueInputObjectSchema } from './PersonalDetailsWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PersonalDetailsCreateNestedOneWithoutUserInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => PersonalDetailsCreateWithoutUserInputObjectSchema),
          z.lazy(
            () => PersonalDetailsUncheckedCreateWithoutUserInputObjectSchema,
          ),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(() => PersonalDetailsCreateOrConnectWithoutUserInputObjectSchema)
        .optional(),
      connect: z
        .lazy(() => PersonalDetailsWhereUniqueInputObjectSchema)
        .optional(),
    })
    .strict();

export const PersonalDetailsCreateNestedOneWithoutUserInputObjectSchema =
  Schema;
