import { z } from 'zod';
import { ArenaCreateWithoutAmenitiesInputObjectSchema } from './ArenaCreateWithoutAmenitiesInput.schema';
import { ArenaUncheckedCreateWithoutAmenitiesInputObjectSchema } from './ArenaUncheckedCreateWithoutAmenitiesInput.schema';
import { ArenaCreateOrConnectWithoutAmenitiesInputObjectSchema } from './ArenaCreateOrConnectWithoutAmenitiesInput.schema';
import { ArenaUpsertWithWhereUniqueWithoutAmenitiesInputObjectSchema } from './ArenaUpsertWithWhereUniqueWithoutAmenitiesInput.schema';
import { ArenaCreateManyAmenitiesInputEnvelopeObjectSchema } from './ArenaCreateManyAmenitiesInputEnvelope.schema';
import { ArenaWhereUniqueInputObjectSchema } from './ArenaWhereUniqueInput.schema';
import { ArenaUpdateWithWhereUniqueWithoutAmenitiesInputObjectSchema } from './ArenaUpdateWithWhereUniqueWithoutAmenitiesInput.schema';
import { ArenaUpdateManyWithWhereWithoutAmenitiesInputObjectSchema } from './ArenaUpdateManyWithWhereWithoutAmenitiesInput.schema';
import { ArenaScalarWhereInputObjectSchema } from './ArenaScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ArenaUpdateManyWithoutAmenitiesNestedInput> = z
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
    upsert: z
      .union([
        z.lazy(
          () => ArenaUpsertWithWhereUniqueWithoutAmenitiesInputObjectSchema,
        ),
        z
          .lazy(
            () => ArenaUpsertWithWhereUniqueWithoutAmenitiesInputObjectSchema,
          )
          .array(),
      ])
      .optional(),
    createMany: z
      .lazy(() => ArenaCreateManyAmenitiesInputEnvelopeObjectSchema)
      .optional(),
    set: z
      .union([
        z.lazy(() => ArenaWhereUniqueInputObjectSchema),
        z.lazy(() => ArenaWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    disconnect: z
      .union([
        z.lazy(() => ArenaWhereUniqueInputObjectSchema),
        z.lazy(() => ArenaWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    delete: z
      .union([
        z.lazy(() => ArenaWhereUniqueInputObjectSchema),
        z.lazy(() => ArenaWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    connect: z
      .union([
        z.lazy(() => ArenaWhereUniqueInputObjectSchema),
        z.lazy(() => ArenaWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    update: z
      .union([
        z.lazy(
          () => ArenaUpdateWithWhereUniqueWithoutAmenitiesInputObjectSchema,
        ),
        z
          .lazy(
            () => ArenaUpdateWithWhereUniqueWithoutAmenitiesInputObjectSchema,
          )
          .array(),
      ])
      .optional(),
    updateMany: z
      .union([
        z.lazy(() => ArenaUpdateManyWithWhereWithoutAmenitiesInputObjectSchema),
        z
          .lazy(() => ArenaUpdateManyWithWhereWithoutAmenitiesInputObjectSchema)
          .array(),
      ])
      .optional(),
    deleteMany: z
      .union([
        z.lazy(() => ArenaScalarWhereInputObjectSchema),
        z.lazy(() => ArenaScalarWhereInputObjectSchema).array(),
      ])
      .optional(),
  })
  .strict();

export const ArenaUpdateManyWithoutAmenitiesNestedInputObjectSchema = Schema;
