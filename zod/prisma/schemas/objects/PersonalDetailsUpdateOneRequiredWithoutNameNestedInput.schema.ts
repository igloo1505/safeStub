import { z } from 'zod';
import { PersonalDetailsCreateWithoutNameInputObjectSchema } from './PersonalDetailsCreateWithoutNameInput.schema';
import { PersonalDetailsUncheckedCreateWithoutNameInputObjectSchema } from './PersonalDetailsUncheckedCreateWithoutNameInput.schema';
import { PersonalDetailsCreateOrConnectWithoutNameInputObjectSchema } from './PersonalDetailsCreateOrConnectWithoutNameInput.schema';
import { PersonalDetailsUpsertWithoutNameInputObjectSchema } from './PersonalDetailsUpsertWithoutNameInput.schema';
import { PersonalDetailsWhereUniqueInputObjectSchema } from './PersonalDetailsWhereUniqueInput.schema';
import { PersonalDetailsUpdateWithoutNameInputObjectSchema } from './PersonalDetailsUpdateWithoutNameInput.schema';
import { PersonalDetailsUncheckedUpdateWithoutNameInputObjectSchema } from './PersonalDetailsUncheckedUpdateWithoutNameInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PersonalDetailsUpdateOneRequiredWithoutNameNestedInput> =
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
      upsert: z
        .lazy(() => PersonalDetailsUpsertWithoutNameInputObjectSchema)
        .optional(),
      connect: z
        .lazy(() => PersonalDetailsWhereUniqueInputObjectSchema)
        .optional(),
      update: z
        .union([
          z.lazy(() => PersonalDetailsUpdateWithoutNameInputObjectSchema),
          z.lazy(
            () => PersonalDetailsUncheckedUpdateWithoutNameInputObjectSchema,
          ),
        ])
        .optional(),
    })
    .strict();

export const PersonalDetailsUpdateOneRequiredWithoutNameNestedInputObjectSchema =
  Schema;
