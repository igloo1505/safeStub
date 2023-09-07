import { z } from 'zod';
import { PersonalDetailsWhereUniqueInputObjectSchema } from './PersonalDetailsWhereUniqueInput.schema';
import { PersonalDetailsCreateWithoutLocationInputObjectSchema } from './PersonalDetailsCreateWithoutLocationInput.schema';
import { PersonalDetailsUncheckedCreateWithoutLocationInputObjectSchema } from './PersonalDetailsUncheckedCreateWithoutLocationInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PersonalDetailsCreateOrConnectWithoutLocationInput> =
  z
    .object({
      where: z.lazy(() => PersonalDetailsWhereUniqueInputObjectSchema),
      create: z.union([
        z.lazy(() => PersonalDetailsCreateWithoutLocationInputObjectSchema),
        z.lazy(
          () => PersonalDetailsUncheckedCreateWithoutLocationInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const PersonalDetailsCreateOrConnectWithoutLocationInputObjectSchema =
  Schema;
