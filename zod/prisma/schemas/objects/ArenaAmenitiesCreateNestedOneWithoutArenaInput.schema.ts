import { z } from 'zod';
import { ArenaAmenitiesCreateWithoutArenaInputObjectSchema } from './ArenaAmenitiesCreateWithoutArenaInput.schema';
import { ArenaAmenitiesUncheckedCreateWithoutArenaInputObjectSchema } from './ArenaAmenitiesUncheckedCreateWithoutArenaInput.schema';
import { ArenaAmenitiesCreateOrConnectWithoutArenaInputObjectSchema } from './ArenaAmenitiesCreateOrConnectWithoutArenaInput.schema';
import { ArenaAmenitiesWhereUniqueInputObjectSchema } from './ArenaAmenitiesWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ArenaAmenitiesCreateNestedOneWithoutArenaInput> =
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
      connect: z
        .lazy(() => ArenaAmenitiesWhereUniqueInputObjectSchema)
        .optional(),
    })
    .strict();

export const ArenaAmenitiesCreateNestedOneWithoutArenaInputObjectSchema =
  Schema;
