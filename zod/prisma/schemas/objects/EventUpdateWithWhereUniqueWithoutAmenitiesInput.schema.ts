import { z } from 'zod';
import { EventWhereUniqueInputObjectSchema } from './EventWhereUniqueInput.schema';
import { EventUpdateWithoutAmenitiesInputObjectSchema } from './EventUpdateWithoutAmenitiesInput.schema';
import { EventUncheckedUpdateWithoutAmenitiesInputObjectSchema } from './EventUncheckedUpdateWithoutAmenitiesInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.EventUpdateWithWhereUniqueWithoutAmenitiesInput> =
  z
    .object({
      where: z.lazy(() => EventWhereUniqueInputObjectSchema),
      data: z.union([
        z.lazy(() => EventUpdateWithoutAmenitiesInputObjectSchema),
        z.lazy(() => EventUncheckedUpdateWithoutAmenitiesInputObjectSchema),
      ]),
    })
    .strict();

export const EventUpdateWithWhereUniqueWithoutAmenitiesInputObjectSchema =
  Schema;
