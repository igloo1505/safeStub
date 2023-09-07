import { z } from 'zod';
import { ArenaAmenitiesCreateWithoutArenaInputObjectSchema } from './ArenaAmenitiesCreateWithoutArenaInput.schema';
import { ArenaAmenitiesUncheckedCreateWithoutArenaInputObjectSchema } from './ArenaAmenitiesUncheckedCreateWithoutArenaInput.schema';
import { ArenaAmenitiesCreateOrConnectWithoutArenaInputObjectSchema } from './ArenaAmenitiesCreateOrConnectWithoutArenaInput.schema';
import { ArenaAmenitiesUpsertWithoutArenaInputObjectSchema } from './ArenaAmenitiesUpsertWithoutArenaInput.schema';
import { ArenaAmenitiesWhereUniqueInputObjectSchema } from './ArenaAmenitiesWhereUniqueInput.schema';
import { ArenaAmenitiesUpdateWithoutArenaInputObjectSchema } from './ArenaAmenitiesUpdateWithoutArenaInput.schema';
import { ArenaAmenitiesUncheckedUpdateWithoutArenaInputObjectSchema } from './ArenaAmenitiesUncheckedUpdateWithoutArenaInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ArenaAmenitiesUpdateOneRequiredWithoutArenaNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => ArenaAmenitiesCreateWithoutArenaInputObjectSchema),
          z.lazy(
            () => ArenaAmenitiesUncheckedCreateWithoutArenaInputObjectSchema,
          ),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(() => ArenaAmenitiesCreateOrConnectWithoutArenaInputObjectSchema)
        .optional(),
      upsert: z
        .lazy(() => ArenaAmenitiesUpsertWithoutArenaInputObjectSchema)
        .optional(),
      connect: z
        .lazy(() => ArenaAmenitiesWhereUniqueInputObjectSchema)
        .optional(),
      update: z
        .union([
          z.lazy(() => ArenaAmenitiesUpdateWithoutArenaInputObjectSchema),
          z.lazy(
            () => ArenaAmenitiesUncheckedUpdateWithoutArenaInputObjectSchema,
          ),
        ])
        .optional(),
    })
    .strict();

export const ArenaAmenitiesUpdateOneRequiredWithoutArenaNestedInputObjectSchema =
  Schema;
