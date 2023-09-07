import { z } from 'zod';
import { PersonalDetailsWhereUniqueInputObjectSchema } from './PersonalDetailsWhereUniqueInput.schema';
import { PersonalDetailsCreateWithoutUserInputObjectSchema } from './PersonalDetailsCreateWithoutUserInput.schema';
import { PersonalDetailsUncheckedCreateWithoutUserInputObjectSchema } from './PersonalDetailsUncheckedCreateWithoutUserInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PersonalDetailsCreateOrConnectWithoutUserInput> =
  z
    .object({
      where: z.lazy(() => PersonalDetailsWhereUniqueInputObjectSchema),
      create: z.union([
        z.lazy(() => PersonalDetailsCreateWithoutUserInputObjectSchema),
        z.lazy(
          () => PersonalDetailsUncheckedCreateWithoutUserInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const PersonalDetailsCreateOrConnectWithoutUserInputObjectSchema =
  Schema;
