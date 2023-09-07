import { z } from 'zod';
import { ArenaAmenitiesUpdateWithoutEventInputObjectSchema } from './ArenaAmenitiesUpdateWithoutEventInput.schema';
import { ArenaAmenitiesUncheckedUpdateWithoutEventInputObjectSchema } from './ArenaAmenitiesUncheckedUpdateWithoutEventInput.schema';
import { ArenaAmenitiesCreateWithoutEventInputObjectSchema } from './ArenaAmenitiesCreateWithoutEventInput.schema';
import { ArenaAmenitiesUncheckedCreateWithoutEventInputObjectSchema } from './ArenaAmenitiesUncheckedCreateWithoutEventInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ArenaAmenitiesUpsertWithoutEventInput> = z
  .object({
    update: z.union([
      z.lazy(() => ArenaAmenitiesUpdateWithoutEventInputObjectSchema),
      z.lazy(() => ArenaAmenitiesUncheckedUpdateWithoutEventInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => ArenaAmenitiesCreateWithoutEventInputObjectSchema),
      z.lazy(() => ArenaAmenitiesUncheckedCreateWithoutEventInputObjectSchema),
    ]),
  })
  .strict();

export const ArenaAmenitiesUpsertWithoutEventInputObjectSchema = Schema;
