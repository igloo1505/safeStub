import { z } from 'zod';
import { ArenaWhereUniqueInputObjectSchema } from './ArenaWhereUniqueInput.schema';
import { ArenaUpdateWithoutAmenitiesInputObjectSchema } from './ArenaUpdateWithoutAmenitiesInput.schema';
import { ArenaUncheckedUpdateWithoutAmenitiesInputObjectSchema } from './ArenaUncheckedUpdateWithoutAmenitiesInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ArenaUpdateWithWhereUniqueWithoutAmenitiesInput> =
  z
    .object({
      where: z.lazy(() => ArenaWhereUniqueInputObjectSchema),
      data: z.union([
        z.lazy(() => ArenaUpdateWithoutAmenitiesInputObjectSchema),
        z.lazy(() => ArenaUncheckedUpdateWithoutAmenitiesInputObjectSchema),
      ]),
    })
    .strict();

export const ArenaUpdateWithWhereUniqueWithoutAmenitiesInputObjectSchema =
  Schema;
