import { z } from 'zod';
import { ArenaAmenitiesWhereUniqueInputObjectSchema } from './ArenaAmenitiesWhereUniqueInput.schema';
import { ArenaAmenitiesCreateWithoutArenaInputObjectSchema } from './ArenaAmenitiesCreateWithoutArenaInput.schema';
import { ArenaAmenitiesUncheckedCreateWithoutArenaInputObjectSchema } from './ArenaAmenitiesUncheckedCreateWithoutArenaInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ArenaAmenitiesCreateOrConnectWithoutArenaInput> =
  z
    .object({
      where: z.lazy(() => ArenaAmenitiesWhereUniqueInputObjectSchema),
      create: z.union([
        z.lazy(() => ArenaAmenitiesCreateWithoutArenaInputObjectSchema),
        z.lazy(
          () => ArenaAmenitiesUncheckedCreateWithoutArenaInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const ArenaAmenitiesCreateOrConnectWithoutArenaInputObjectSchema =
  Schema;
