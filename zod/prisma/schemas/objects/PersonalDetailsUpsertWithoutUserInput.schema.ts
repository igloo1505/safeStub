import { z } from 'zod';
import { PersonalDetailsUpdateWithoutUserInputObjectSchema } from './PersonalDetailsUpdateWithoutUserInput.schema';
import { PersonalDetailsUncheckedUpdateWithoutUserInputObjectSchema } from './PersonalDetailsUncheckedUpdateWithoutUserInput.schema';
import { PersonalDetailsCreateWithoutUserInputObjectSchema } from './PersonalDetailsCreateWithoutUserInput.schema';
import { PersonalDetailsUncheckedCreateWithoutUserInputObjectSchema } from './PersonalDetailsUncheckedCreateWithoutUserInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PersonalDetailsUpsertWithoutUserInput> = z
  .object({
    update: z.union([
      z.lazy(() => PersonalDetailsUpdateWithoutUserInputObjectSchema),
      z.lazy(() => PersonalDetailsUncheckedUpdateWithoutUserInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => PersonalDetailsCreateWithoutUserInputObjectSchema),
      z.lazy(() => PersonalDetailsUncheckedCreateWithoutUserInputObjectSchema),
    ]),
  })
  .strict();

export const PersonalDetailsUpsertWithoutUserInputObjectSchema = Schema;
