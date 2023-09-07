import { z } from 'zod';
import { PersonalDetailsCreateWithoutNameInputObjectSchema } from './PersonalDetailsCreateWithoutNameInput.schema';
import { PersonalDetailsUncheckedCreateWithoutNameInputObjectSchema } from './PersonalDetailsUncheckedCreateWithoutNameInput.schema';
import { PersonalDetailsCreateOrConnectWithoutNameInputObjectSchema } from './PersonalDetailsCreateOrConnectWithoutNameInput.schema';
import { PersonalDetailsWhereUniqueInputObjectSchema } from './PersonalDetailsWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PersonalDetailsCreateNestedOneWithoutNameInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => PersonalDetailsCreateWithoutNameInputObjectSchema),
          z.lazy(
            () => PersonalDetailsUncheckedCreateWithoutNameInputObjectSchema,
          ),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(() => PersonalDetailsCreateOrConnectWithoutNameInputObjectSchema)
        .optional(),
      connect: z
        .lazy(() => PersonalDetailsWhereUniqueInputObjectSchema)
        .optional(),
    })
    .strict();

export const PersonalDetailsCreateNestedOneWithoutNameInputObjectSchema =
  Schema;
