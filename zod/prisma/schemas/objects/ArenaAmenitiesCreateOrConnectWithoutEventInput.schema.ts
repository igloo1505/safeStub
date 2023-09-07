import { z } from 'zod';
import { ArenaAmenitiesWhereUniqueInputObjectSchema } from './ArenaAmenitiesWhereUniqueInput.schema';
import { ArenaAmenitiesCreateWithoutEventInputObjectSchema } from './ArenaAmenitiesCreateWithoutEventInput.schema';
import { ArenaAmenitiesUncheckedCreateWithoutEventInputObjectSchema } from './ArenaAmenitiesUncheckedCreateWithoutEventInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ArenaAmenitiesCreateOrConnectWithoutEventInput> =
  z
    .object({
      where: z.lazy(() => ArenaAmenitiesWhereUniqueInputObjectSchema),
      create: z.union([
        z.lazy(() => ArenaAmenitiesCreateWithoutEventInputObjectSchema),
        z.lazy(
          () => ArenaAmenitiesUncheckedCreateWithoutEventInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const ArenaAmenitiesCreateOrConnectWithoutEventInputObjectSchema =
  Schema;
