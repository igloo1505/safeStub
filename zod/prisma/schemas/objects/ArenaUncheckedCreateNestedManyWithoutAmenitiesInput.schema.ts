import { z } from 'zod';
import { ArenaCreateWithoutAmenitiesInputObjectSchema } from './ArenaCreateWithoutAmenitiesInput.schema';
import { ArenaUncheckedCreateWithoutAmenitiesInputObjectSchema } from './ArenaUncheckedCreateWithoutAmenitiesInput.schema';
import { ArenaCreateOrConnectWithoutAmenitiesInputObjectSchema } from './ArenaCreateOrConnectWithoutAmenitiesInput.schema';
import { ArenaCreateManyAmenitiesInputEnvelopeObjectSchema } from './ArenaCreateManyAmenitiesInputEnvelope.schema';
import { ArenaWhereUniqueInputObjectSchema } from './ArenaWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ArenaUncheckedCreateNestedManyWithoutAmenitiesInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => ArenaCreateWithoutAmenitiesInputObjectSchema),
          z.lazy(() => ArenaCreateWithoutAmenitiesInputObjectSchema).array(),
          z.lazy(() => ArenaUncheckedCreateWithoutAmenitiesInputObjectSchema),
          z
            .lazy(() => ArenaUncheckedCreateWithoutAmenitiesInputObjectSchema)
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(() => ArenaCreateOrConnectWithoutAmenitiesInputObjectSchema),
          z
            .lazy(() => ArenaCreateOrConnectWithoutAmenitiesInputObjectSchema)
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => ArenaCreateManyAmenitiesInputEnvelopeObjectSchema)
        .optional(),
      connect: z
        .union([
          z.lazy(() => ArenaWhereUniqueInputObjectSchema),
          z.lazy(() => ArenaWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const ArenaUncheckedCreateNestedManyWithoutAmenitiesInputObjectSchema =
  Schema;
