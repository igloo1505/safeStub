import { z } from 'zod';
import { ArenaAmenitiesUpdateWithoutArenaInputObjectSchema } from './ArenaAmenitiesUpdateWithoutArenaInput.schema';
import { ArenaAmenitiesUncheckedUpdateWithoutArenaInputObjectSchema } from './ArenaAmenitiesUncheckedUpdateWithoutArenaInput.schema';
import { ArenaAmenitiesCreateWithoutArenaInputObjectSchema } from './ArenaAmenitiesCreateWithoutArenaInput.schema';
import { ArenaAmenitiesUncheckedCreateWithoutArenaInputObjectSchema } from './ArenaAmenitiesUncheckedCreateWithoutArenaInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ArenaAmenitiesUpsertWithoutArenaInput> = z
  .object({
    update: z.union([
      z.lazy(() => ArenaAmenitiesUpdateWithoutArenaInputObjectSchema),
      z.lazy(() => ArenaAmenitiesUncheckedUpdateWithoutArenaInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => ArenaAmenitiesCreateWithoutArenaInputObjectSchema),
      z.lazy(() => ArenaAmenitiesUncheckedCreateWithoutArenaInputObjectSchema),
    ]),
  })
  .strict();

export const ArenaAmenitiesUpsertWithoutArenaInputObjectSchema = Schema;
