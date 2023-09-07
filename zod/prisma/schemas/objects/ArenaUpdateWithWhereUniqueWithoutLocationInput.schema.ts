import { z } from 'zod';
import { ArenaWhereUniqueInputObjectSchema } from './ArenaWhereUniqueInput.schema';
import { ArenaUpdateWithoutLocationInputObjectSchema } from './ArenaUpdateWithoutLocationInput.schema';
import { ArenaUncheckedUpdateWithoutLocationInputObjectSchema } from './ArenaUncheckedUpdateWithoutLocationInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ArenaUpdateWithWhereUniqueWithoutLocationInput> =
  z
    .object({
      where: z.lazy(() => ArenaWhereUniqueInputObjectSchema),
      data: z.union([
        z.lazy(() => ArenaUpdateWithoutLocationInputObjectSchema),
        z.lazy(() => ArenaUncheckedUpdateWithoutLocationInputObjectSchema),
      ]),
    })
    .strict();

export const ArenaUpdateWithWhereUniqueWithoutLocationInputObjectSchema =
  Schema;
