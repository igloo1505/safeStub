import { z } from 'zod';
import { AMENITIYSchema } from '../enums/AMENITIY.schema';
import { PARKINGSchema } from '../enums/PARKING.schema';
import { ArenaCreateNestedManyWithoutAmenitiesInputObjectSchema } from './ArenaCreateNestedManyWithoutAmenitiesInput.schema';
import { EventCreateNestedManyWithoutAmenitiesInputObjectSchema } from './EventCreateNestedManyWithoutAmenitiesInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ArenaAmenitiesCreateInput> = z
  .object({
    indoor: z.lazy(() => AMENITIYSchema).optional(),
    covered: z.lazy(() => AMENITIYSchema).optional(),
    outdoor: z.lazy(() => AMENITIYSchema).optional(),
    food: z.boolean().optional(),
    alcohol: z.boolean().optional(),
    parking: z.lazy(() => PARKINGSchema).optional(),
    shuttleAvailable: z.boolean().optional(),
    Arena: z
      .lazy(() => ArenaCreateNestedManyWithoutAmenitiesInputObjectSchema)
      .optional(),
    Event: z
      .lazy(() => EventCreateNestedManyWithoutAmenitiesInputObjectSchema)
      .optional(),
  })
  .strict();

export const ArenaAmenitiesCreateInputObjectSchema = Schema;
