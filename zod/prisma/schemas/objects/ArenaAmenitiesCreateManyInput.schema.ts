import { z } from 'zod';
import { AMENITIYSchema } from '../enums/AMENITIY.schema';
import { PARKINGSchema } from '../enums/PARKING.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ArenaAmenitiesCreateManyInput> = z
  .object({
    id: z.number().optional(),
    indoor: z.lazy(() => AMENITIYSchema).optional(),
    covered: z.lazy(() => AMENITIYSchema).optional(),
    outdoor: z.lazy(() => AMENITIYSchema).optional(),
    food: z.boolean().optional(),
    alcohol: z.boolean().optional(),
    parking: z.lazy(() => PARKINGSchema).optional(),
    shuttleAvailable: z.boolean().optional(),
  })
  .strict();

export const ArenaAmenitiesCreateManyInputObjectSchema = Schema;
