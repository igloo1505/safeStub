import { z } from 'zod';
import { PersonalDetailsCreateWithoutLocationInputObjectSchema } from './PersonalDetailsCreateWithoutLocationInput.schema';
import { PersonalDetailsUncheckedCreateWithoutLocationInputObjectSchema } from './PersonalDetailsUncheckedCreateWithoutLocationInput.schema';
import { PersonalDetailsCreateOrConnectWithoutLocationInputObjectSchema } from './PersonalDetailsCreateOrConnectWithoutLocationInput.schema';
import { PersonalDetailsUpsertWithoutLocationInputObjectSchema } from './PersonalDetailsUpsertWithoutLocationInput.schema';
import { PersonalDetailsWhereUniqueInputObjectSchema } from './PersonalDetailsWhereUniqueInput.schema';
import { PersonalDetailsUpdateWithoutLocationInputObjectSchema } from './PersonalDetailsUpdateWithoutLocationInput.schema';
import { PersonalDetailsUncheckedUpdateWithoutLocationInputObjectSchema } from './PersonalDetailsUncheckedUpdateWithoutLocationInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PersonalDetailsUpdateOneWithoutLocationNestedInput> =
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
      upsert: z
        .lazy(() => PersonalDetailsUpsertWithoutLocationInputObjectSchema)
        .optional(),
      disconnect: z.boolean().optional(),
      delete: z.boolean().optional(),
      connect: z
        .lazy(() => PersonalDetailsWhereUniqueInputObjectSchema)
        .optional(),
      update: z
        .union([
          z.lazy(() => PersonalDetailsUpdateWithoutLocationInputObjectSchema),
          z.lazy(
            () =>
              PersonalDetailsUncheckedUpdateWithoutLocationInputObjectSchema,
          ),
        ])
        .optional(),
    })
    .strict();

export const PersonalDetailsUpdateOneWithoutLocationNestedInputObjectSchema =
  Schema;
