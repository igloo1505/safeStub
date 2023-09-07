import { z } from 'zod';
import { PersonalDetailsWhereUniqueInputObjectSchema } from './PersonalDetailsWhereUniqueInput.schema';
import { PersonalDetailsCreateWithoutNameInputObjectSchema } from './PersonalDetailsCreateWithoutNameInput.schema';
import { PersonalDetailsUncheckedCreateWithoutNameInputObjectSchema } from './PersonalDetailsUncheckedCreateWithoutNameInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PersonalDetailsCreateOrConnectWithoutNameInput> =
  z
    .object({
      where: z.lazy(() => PersonalDetailsWhereUniqueInputObjectSchema),
      create: z.union([
        z.lazy(() => PersonalDetailsCreateWithoutNameInputObjectSchema),
        z.lazy(
          () => PersonalDetailsUncheckedCreateWithoutNameInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const PersonalDetailsCreateOrConnectWithoutNameInputObjectSchema =
  Schema;
