import { z } from 'zod';
import { ArenaAmenitiesCreateWithoutEventInputObjectSchema } from './ArenaAmenitiesCreateWithoutEventInput.schema';
import { ArenaAmenitiesUncheckedCreateWithoutEventInputObjectSchema } from './ArenaAmenitiesUncheckedCreateWithoutEventInput.schema';
import { ArenaAmenitiesCreateOrConnectWithoutEventInputObjectSchema } from './ArenaAmenitiesCreateOrConnectWithoutEventInput.schema';
import { ArenaAmenitiesUpsertWithoutEventInputObjectSchema } from './ArenaAmenitiesUpsertWithoutEventInput.schema';
import { ArenaAmenitiesWhereUniqueInputObjectSchema } from './ArenaAmenitiesWhereUniqueInput.schema';
import { ArenaAmenitiesUpdateWithoutEventInputObjectSchema } from './ArenaAmenitiesUpdateWithoutEventInput.schema';
import { ArenaAmenitiesUncheckedUpdateWithoutEventInputObjectSchema } from './ArenaAmenitiesUncheckedUpdateWithoutEventInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ArenaAmenitiesUpdateOneRequiredWithoutEventNestedInput> =
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
      upsert: z
        .lazy(() => ArenaAmenitiesUpsertWithoutEventInputObjectSchema)
        .optional(),
      connect: z
        .lazy(() => ArenaAmenitiesWhereUniqueInputObjectSchema)
        .optional(),
      update: z
        .union([
          z.lazy(() => ArenaAmenitiesUpdateWithoutEventInputObjectSchema),
          z.lazy(
            () => ArenaAmenitiesUncheckedUpdateWithoutEventInputObjectSchema,
          ),
        ])
        .optional(),
    })
    .strict();

export const ArenaAmenitiesUpdateOneRequiredWithoutEventNestedInputObjectSchema =
  Schema;
