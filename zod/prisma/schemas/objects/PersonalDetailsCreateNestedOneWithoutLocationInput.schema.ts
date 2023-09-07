import { z } from 'zod';
import { PersonalDetailsCreateWithoutLocationInputObjectSchema } from './PersonalDetailsCreateWithoutLocationInput.schema';
import { PersonalDetailsUncheckedCreateWithoutLocationInputObjectSchema } from './PersonalDetailsUncheckedCreateWithoutLocationInput.schema';
import { PersonalDetailsCreateOrConnectWithoutLocationInputObjectSchema } from './PersonalDetailsCreateOrConnectWithoutLocationInput.schema';
import { PersonalDetailsWhereUniqueInputObjectSchema } from './PersonalDetailsWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PersonalDetailsCreateNestedOneWithoutLocationInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => PersonalDetailsCreateWithoutLocationInputObjectSchema),
          z.lazy(
            () =>
              PersonalDetailsUncheckedCreateWithoutLocationInputObjectSchema,
          ),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(
          () => PersonalDetailsCreateOrConnectWithoutLocationInputObjectSchema,
        )
        .optional(),
      connect: z
        .lazy(() => PersonalDetailsWhereUniqueInputObjectSchema)
        .optional(),
    })
    .strict();

export const PersonalDetailsCreateNestedOneWithoutLocationInputObjectSchema =
  Schema;
