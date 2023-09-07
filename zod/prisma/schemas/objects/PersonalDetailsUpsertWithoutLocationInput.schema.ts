import { z } from 'zod';
import { PersonalDetailsUpdateWithoutLocationInputObjectSchema } from './PersonalDetailsUpdateWithoutLocationInput.schema';
import { PersonalDetailsUncheckedUpdateWithoutLocationInputObjectSchema } from './PersonalDetailsUncheckedUpdateWithoutLocationInput.schema';
import { PersonalDetailsCreateWithoutLocationInputObjectSchema } from './PersonalDetailsCreateWithoutLocationInput.schema';
import { PersonalDetailsUncheckedCreateWithoutLocationInputObjectSchema } from './PersonalDetailsUncheckedCreateWithoutLocationInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PersonalDetailsUpsertWithoutLocationInput> = z
  .object({
    update: z.union([
      z.lazy(() => PersonalDetailsUpdateWithoutLocationInputObjectSchema),
      z.lazy(
        () => PersonalDetailsUncheckedUpdateWithoutLocationInputObjectSchema,
      ),
    ]),
    create: z.union([
      z.lazy(() => PersonalDetailsCreateWithoutLocationInputObjectSchema),
      z.lazy(
        () => PersonalDetailsUncheckedCreateWithoutLocationInputObjectSchema,
      ),
    ]),
  })
  .strict();

export const PersonalDetailsUpsertWithoutLocationInputObjectSchema = Schema;
