import { z } from 'zod';
import { EventWhereUniqueInputObjectSchema } from './EventWhereUniqueInput.schema';
import { EventCreateWithoutAmenitiesInputObjectSchema } from './EventCreateWithoutAmenitiesInput.schema';
import { EventUncheckedCreateWithoutAmenitiesInputObjectSchema } from './EventUncheckedCreateWithoutAmenitiesInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.EventCreateOrConnectWithoutAmenitiesInput> = z
  .object({
    where: z.lazy(() => EventWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => EventCreateWithoutAmenitiesInputObjectSchema),
      z.lazy(() => EventUncheckedCreateWithoutAmenitiesInputObjectSchema),
    ]),
  })
  .strict();

export const EventCreateOrConnectWithoutAmenitiesInputObjectSchema = Schema;
