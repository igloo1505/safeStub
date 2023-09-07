import { z } from 'zod';
import { PersonalDetailsCreateWithoutUserInputObjectSchema } from './PersonalDetailsCreateWithoutUserInput.schema';
import { PersonalDetailsUncheckedCreateWithoutUserInputObjectSchema } from './PersonalDetailsUncheckedCreateWithoutUserInput.schema';
import { PersonalDetailsCreateOrConnectWithoutUserInputObjectSchema } from './PersonalDetailsCreateOrConnectWithoutUserInput.schema';
import { PersonalDetailsUpsertWithoutUserInputObjectSchema } from './PersonalDetailsUpsertWithoutUserInput.schema';
import { PersonalDetailsWhereUniqueInputObjectSchema } from './PersonalDetailsWhereUniqueInput.schema';
import { PersonalDetailsUpdateWithoutUserInputObjectSchema } from './PersonalDetailsUpdateWithoutUserInput.schema';
import { PersonalDetailsUncheckedUpdateWithoutUserInputObjectSchema } from './PersonalDetailsUncheckedUpdateWithoutUserInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PersonalDetailsUncheckedUpdateOneWithoutUserNestedInput> =
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
      upsert: z
        .lazy(() => PersonalDetailsUpsertWithoutUserInputObjectSchema)
        .optional(),
      disconnect: z.boolean().optional(),
      delete: z.boolean().optional(),
      connect: z
        .lazy(() => PersonalDetailsWhereUniqueInputObjectSchema)
        .optional(),
      update: z
        .union([
          z.lazy(() => PersonalDetailsUpdateWithoutUserInputObjectSchema),
          z.lazy(
            () => PersonalDetailsUncheckedUpdateWithoutUserInputObjectSchema,
          ),
        ])
        .optional(),
    })
    .strict();

export const PersonalDetailsUncheckedUpdateOneWithoutUserNestedInputObjectSchema =
  Schema;
