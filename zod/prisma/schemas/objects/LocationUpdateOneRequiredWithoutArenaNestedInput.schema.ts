import { z } from 'zod';
import { LocationCreateWithoutArenaInputObjectSchema } from './LocationCreateWithoutArenaInput.schema';
import { LocationUncheckedCreateWithoutArenaInputObjectSchema } from './LocationUncheckedCreateWithoutArenaInput.schema';
import { LocationCreateOrConnectWithoutArenaInputObjectSchema } from './LocationCreateOrConnectWithoutArenaInput.schema';
import { LocationUpsertWithoutArenaInputObjectSchema } from './LocationUpsertWithoutArenaInput.schema';
import { LocationWhereUniqueInputObjectSchema } from './LocationWhereUniqueInput.schema';
import { LocationUpdateWithoutArenaInputObjectSchema } from './LocationUpdateWithoutArenaInput.schema';
import { LocationUncheckedUpdateWithoutArenaInputObjectSchema } from './LocationUncheckedUpdateWithoutArenaInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.LocationUpdateOneRequiredWithoutArenaNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => LocationCreateWithoutArenaInputObjectSchema),
          z.lazy(() => LocationUncheckedCreateWithoutArenaInputObjectSchema),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(() => LocationCreateOrConnectWithoutArenaInputObjectSchema)
        .optional(),
      upsert: z
        .lazy(() => LocationUpsertWithoutArenaInputObjectSchema)
        .optional(),
      connect: z.lazy(() => LocationWhereUniqueInputObjectSchema).optional(),
      update: z
        .union([
          z.lazy(() => LocationUpdateWithoutArenaInputObjectSchema),
          z.lazy(() => LocationUncheckedUpdateWithoutArenaInputObjectSchema),
        ])
        .optional(),
    })
    .strict();

export const LocationUpdateOneRequiredWithoutArenaNestedInputObjectSchema =
  Schema;
