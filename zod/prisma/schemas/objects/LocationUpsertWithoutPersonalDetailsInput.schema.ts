import { z } from 'zod';
import { LocationUpdateWithoutPersonalDetailsInputObjectSchema } from './LocationUpdateWithoutPersonalDetailsInput.schema';
import { LocationUncheckedUpdateWithoutPersonalDetailsInputObjectSchema } from './LocationUncheckedUpdateWithoutPersonalDetailsInput.schema';
import { LocationCreateWithoutPersonalDetailsInputObjectSchema } from './LocationCreateWithoutPersonalDetailsInput.schema';
import { LocationUncheckedCreateWithoutPersonalDetailsInputObjectSchema } from './LocationUncheckedCreateWithoutPersonalDetailsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.LocationUpsertWithoutPersonalDetailsInput> = z
  .object({
    update: z.union([
      z.lazy(() => LocationUpdateWithoutPersonalDetailsInputObjectSchema),
      z.lazy(
        () => LocationUncheckedUpdateWithoutPersonalDetailsInputObjectSchema,
      ),
    ]),
    create: z.union([
      z.lazy(() => LocationCreateWithoutPersonalDetailsInputObjectSchema),
      z.lazy(
        () => LocationUncheckedCreateWithoutPersonalDetailsInputObjectSchema,
      ),
    ]),
  })
  .strict();

export const LocationUpsertWithoutPersonalDetailsInputObjectSchema = Schema;
