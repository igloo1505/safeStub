import { z } from 'zod';
import { AMENITIYSchema } from '../enums/AMENITIY.schema';
import { PARKINGSchema } from '../enums/PARKING.schema';
import { EventUncheckedCreateNestedManyWithoutAmenitiesInputObjectSchema } from './EventUncheckedCreateNestedManyWithoutAmenitiesInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ArenaAmenitiesUncheckedCreateWithoutArenaInput> =
  z
    .object({
      id: z.number().optional(),
      indoor: z.lazy(() => AMENITIYSchema).optional(),
      covered: z.lazy(() => AMENITIYSchema).optional(),
      outdoor: z.lazy(() => AMENITIYSchema).optional(),
      food: z.boolean().optional(),
      alcohol: z.boolean().optional(),
      parking: z.lazy(() => PARKINGSchema).optional(),
      shuttleAvailable: z.boolean().optional(),
      Event: z
        .lazy(
          () => EventUncheckedCreateNestedManyWithoutAmenitiesInputObjectSchema,
        )
        .optional(),
    })
    .strict();

export const ArenaAmenitiesUncheckedCreateWithoutArenaInputObjectSchema =
  Schema;
