import { z } from 'zod';
import { PersonalDetailsUpdateWithoutNameInputObjectSchema } from './PersonalDetailsUpdateWithoutNameInput.schema';
import { PersonalDetailsUncheckedUpdateWithoutNameInputObjectSchema } from './PersonalDetailsUncheckedUpdateWithoutNameInput.schema';
import { PersonalDetailsCreateWithoutNameInputObjectSchema } from './PersonalDetailsCreateWithoutNameInput.schema';
import { PersonalDetailsUncheckedCreateWithoutNameInputObjectSchema } from './PersonalDetailsUncheckedCreateWithoutNameInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PersonalDetailsUpsertWithoutNameInput> = z
  .object({
    update: z.union([
      z.lazy(() => PersonalDetailsUpdateWithoutNameInputObjectSchema),
      z.lazy(() => PersonalDetailsUncheckedUpdateWithoutNameInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => PersonalDetailsCreateWithoutNameInputObjectSchema),
      z.lazy(() => PersonalDetailsUncheckedCreateWithoutNameInputObjectSchema),
    ]),
  })
  .strict();

export const PersonalDetailsUpsertWithoutNameInputObjectSchema = Schema;
