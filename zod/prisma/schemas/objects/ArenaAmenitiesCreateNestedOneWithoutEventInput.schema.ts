import { z } from 'zod';
import { ArenaAmenitiesCreateWithoutEventInputObjectSchema } from './ArenaAmenitiesCreateWithoutEventInput.schema';
import { ArenaAmenitiesUncheckedCreateWithoutEventInputObjectSchema } from './ArenaAmenitiesUncheckedCreateWithoutEventInput.schema';
import { ArenaAmenitiesCreateOrConnectWithoutEventInputObjectSchema } from './ArenaAmenitiesCreateOrConnectWithoutEventInput.schema';
import { ArenaAmenitiesWhereUniqueInputObjectSchema } from './ArenaAmenitiesWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ArenaAmenitiesCreateNestedOneWithoutEventInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => ArenaAmenitiesCreateWithoutEventInputObjectSchema),
          z.lazy(
            () => ArenaAmenitiesUncheckedCreateWithoutEventInputObjectSchema,
          ),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(() => ArenaAmenitiesCreateOrConnectWithoutEventInputObjectSchema)
        .optional(),
      connect: z
        .lazy(() => ArenaAmenitiesWhereUniqueInputObjectSchema)
        .optional(),
    })
    .strict();

export const ArenaAmenitiesCreateNestedOneWithoutEventInputObjectSchema =
  Schema;
