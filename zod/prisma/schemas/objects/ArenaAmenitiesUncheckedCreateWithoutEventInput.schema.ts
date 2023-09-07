import { z } from 'zod';
import { AMENITIYSchema } from '../enums/AMENITIY.schema';
import { PARKINGSchema } from '../enums/PARKING.schema';
import { ArenaUncheckedCreateNestedManyWithoutAmenitiesInputObjectSchema } from './ArenaUncheckedCreateNestedManyWithoutAmenitiesInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ArenaAmenitiesUncheckedCreateWithoutEventInput> =
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
      Arena: z
        .lazy(
          () => ArenaUncheckedCreateNestedManyWithoutAmenitiesInputObjectSchema,
        )
        .optional(),
    })
    .strict();

export const ArenaAmenitiesUncheckedCreateWithoutEventInputObjectSchema =
  Schema;
