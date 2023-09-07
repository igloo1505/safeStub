import { z } from 'zod';
import { EventCreateWithoutAmenitiesInputObjectSchema } from './EventCreateWithoutAmenitiesInput.schema';
import { EventUncheckedCreateWithoutAmenitiesInputObjectSchema } from './EventUncheckedCreateWithoutAmenitiesInput.schema';
import { EventCreateOrConnectWithoutAmenitiesInputObjectSchema } from './EventCreateOrConnectWithoutAmenitiesInput.schema';
import { EventCreateManyAmenitiesInputEnvelopeObjectSchema } from './EventCreateManyAmenitiesInputEnvelope.schema';
import { EventWhereUniqueInputObjectSchema } from './EventWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.EventCreateNestedManyWithoutAmenitiesInput> = z
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
    createMany: z
      .lazy(() => EventCreateManyAmenitiesInputEnvelopeObjectSchema)
      .optional(),
    connect: z
      .union([
        z.lazy(() => EventWhereUniqueInputObjectSchema),
        z.lazy(() => EventWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
  })
  .strict();

export const EventCreateNestedManyWithoutAmenitiesInputObjectSchema = Schema;
