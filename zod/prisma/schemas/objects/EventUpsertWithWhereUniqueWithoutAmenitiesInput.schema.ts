import { z } from 'zod';
import { EventWhereUniqueInputObjectSchema } from './EventWhereUniqueInput.schema';
import { EventUpdateWithoutAmenitiesInputObjectSchema } from './EventUpdateWithoutAmenitiesInput.schema';
import { EventUncheckedUpdateWithoutAmenitiesInputObjectSchema } from './EventUncheckedUpdateWithoutAmenitiesInput.schema';
import { EventCreateWithoutAmenitiesInputObjectSchema } from './EventCreateWithoutAmenitiesInput.schema';
import { EventUncheckedCreateWithoutAmenitiesInputObjectSchema } from './EventUncheckedCreateWithoutAmenitiesInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.EventUpsertWithWhereUniqueWithoutAmenitiesInput> =
  z
    .object({
      where: z.lazy(() => EventWhereUniqueInputObjectSchema),
      update: z.union([
        z.lazy(() => EventUpdateWithoutAmenitiesInputObjectSchema),
        z.lazy(() => EventUncheckedUpdateWithoutAmenitiesInputObjectSchema),
      ]),
      create: z.union([
        z.lazy(() => EventCreateWithoutAmenitiesInputObjectSchema),
        z.lazy(() => EventUncheckedCreateWithoutAmenitiesInputObjectSchema),
      ]),
    })
    .strict();

export const EventUpsertWithWhereUniqueWithoutAmenitiesInputObjectSchema =
  Schema;
