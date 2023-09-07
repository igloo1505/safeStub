import { z } from 'zod';
import { ArenaWhereUniqueInputObjectSchema } from './ArenaWhereUniqueInput.schema';
import { ArenaUpdateWithoutAmenitiesInputObjectSchema } from './ArenaUpdateWithoutAmenitiesInput.schema';
import { ArenaUncheckedUpdateWithoutAmenitiesInputObjectSchema } from './ArenaUncheckedUpdateWithoutAmenitiesInput.schema';
import { ArenaCreateWithoutAmenitiesInputObjectSchema } from './ArenaCreateWithoutAmenitiesInput.schema';
import { ArenaUncheckedCreateWithoutAmenitiesInputObjectSchema } from './ArenaUncheckedCreateWithoutAmenitiesInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ArenaUpsertWithWhereUniqueWithoutAmenitiesInput> =
  z
    .object({
      where: z.lazy(() => ArenaWhereUniqueInputObjectSchema),
      update: z.union([
        z.lazy(() => ArenaUpdateWithoutAmenitiesInputObjectSchema),
        z.lazy(() => ArenaUncheckedUpdateWithoutAmenitiesInputObjectSchema),
      ]),
      create: z.union([
        z.lazy(() => ArenaCreateWithoutAmenitiesInputObjectSchema),
        z.lazy(() => ArenaUncheckedCreateWithoutAmenitiesInputObjectSchema),
      ]),
    })
    .strict();

export const ArenaUpsertWithWhereUniqueWithoutAmenitiesInputObjectSchema =
  Schema;
