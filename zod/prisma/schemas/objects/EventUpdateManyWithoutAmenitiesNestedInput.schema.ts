import { z } from 'zod';
import { EventCreateWithoutAmenitiesInputObjectSchema } from './EventCreateWithoutAmenitiesInput.schema';
import { EventUncheckedCreateWithoutAmenitiesInputObjectSchema } from './EventUncheckedCreateWithoutAmenitiesInput.schema';
import { EventCreateOrConnectWithoutAmenitiesInputObjectSchema } from './EventCreateOrConnectWithoutAmenitiesInput.schema';
import { EventUpsertWithWhereUniqueWithoutAmenitiesInputObjectSchema } from './EventUpsertWithWhereUniqueWithoutAmenitiesInput.schema';
import { EventCreateManyAmenitiesInputEnvelopeObjectSchema } from './EventCreateManyAmenitiesInputEnvelope.schema';
import { EventWhereUniqueInputObjectSchema } from './EventWhereUniqueInput.schema';
import { EventUpdateWithWhereUniqueWithoutAmenitiesInputObjectSchema } from './EventUpdateWithWhereUniqueWithoutAmenitiesInput.schema';
import { EventUpdateManyWithWhereWithoutAmenitiesInputObjectSchema } from './EventUpdateManyWithWhereWithoutAmenitiesInput.schema';
import { EventScalarWhereInputObjectSchema } from './EventScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.EventUpdateManyWithoutAmenitiesNestedInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => EventCreateWithoutAmenitiesInputObjectSchema),
        z.lazy(() => EventCreateWithoutAmenitiesInputObjectSchema).array(),
        z.lazy(() => EventUncheckedCreateWithoutAmenitiesInputObjectSchema),
        z
          .lazy(() => EventUncheckedCreateWithoutAmenitiesInputObjectSchema)
          .array(),
      ])
      .optional(),
    connectOrCreate: z
      .union([
        z.lazy(() => EventCreateOrConnectWithoutAmenitiesInputObjectSchema),
        z
          .lazy(() => EventCreateOrConnectWithoutAmenitiesInputObjectSchema)
          .array(),
      ])
      .optional(),
    upsert: z
      .union([
        z.lazy(
          () => EventUpsertWithWhereUniqueWithoutAmenitiesInputObjectSchema,
        ),
        z
          .lazy(
            () => EventUpsertWithWhereUniqueWithoutAmenitiesInputObjectSchema,
          )
          .array(),
      ])
      .optional(),
    createMany: z
      .lazy(() => EventCreateManyAmenitiesInputEnvelopeObjectSchema)
      .optional(),
    set: z
      .union([
        z.lazy(() => EventWhereUniqueInputObjectSchema),
        z.lazy(() => EventWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    disconnect: z
      .union([
        z.lazy(() => EventWhereUniqueInputObjectSchema),
        z.lazy(() => EventWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    delete: z
      .union([
        z.lazy(() => EventWhereUniqueInputObjectSchema),
        z.lazy(() => EventWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    connect: z
      .union([
        z.lazy(() => EventWhereUniqueInputObjectSchema),
        z.lazy(() => EventWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    update: z
      .union([
        z.lazy(
          () => EventUpdateWithWhereUniqueWithoutAmenitiesInputObjectSchema,
        ),
        z
          .lazy(
            () => EventUpdateWithWhereUniqueWithoutAmenitiesInputObjectSchema,
          )
          .array(),
      ])
      .optional(),
    updateMany: z
      .union([
        z.lazy(() => EventUpdateManyWithWhereWithoutAmenitiesInputObjectSchema),
        z
          .lazy(() => EventUpdateManyWithWhereWithoutAmenitiesInputObjectSchema)
          .array(),
      ])
      .optional(),
    deleteMany: z
      .union([
        z.lazy(() => EventScalarWhereInputObjectSchema),
        z.lazy(() => EventScalarWhereInputObjectSchema).array(),
      ])
      .optional(),
  })
  .strict();

export const EventUpdateManyWithoutAmenitiesNestedInputObjectSchema = Schema;
