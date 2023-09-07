import { z } from 'zod';
import { LocationUpdateWithoutArenaInputObjectSchema } from './LocationUpdateWithoutArenaInput.schema';
import { LocationUncheckedUpdateWithoutArenaInputObjectSchema } from './LocationUncheckedUpdateWithoutArenaInput.schema';
import { LocationCreateWithoutArenaInputObjectSchema } from './LocationCreateWithoutArenaInput.schema';
import { LocationUncheckedCreateWithoutArenaInputObjectSchema } from './LocationUncheckedCreateWithoutArenaInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.LocationUpsertWithoutArenaInput> = z
  .object({
    update: z.union([
      z.lazy(() => LocationUpdateWithoutArenaInputObjectSchema),
      z.lazy(() => LocationUncheckedUpdateWithoutArenaInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => LocationCreateWithoutArenaInputObjectSchema),
      z.lazy(() => LocationUncheckedCreateWithoutArenaInputObjectSchema),
    ]),
  })
  .strict();

export const LocationUpsertWithoutArenaInputObjectSchema = Schema;
