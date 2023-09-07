import { z } from 'zod';
import { IntFilterObjectSchema } from './IntFilter.schema';
import { EnumAMENITIYFilterObjectSchema } from './EnumAMENITIYFilter.schema';
import { AMENITIYSchema } from '../enums/AMENITIY.schema';
import { BoolFilterObjectSchema } from './BoolFilter.schema';
import { EnumPARKINGFilterObjectSchema } from './EnumPARKINGFilter.schema';
import { PARKINGSchema } from '../enums/PARKING.schema';
import { ArenaListRelationFilterObjectSchema } from './ArenaListRelationFilter.schema';
import { EventListRelationFilterObjectSchema } from './EventListRelationFilter.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ArenaAmenitiesWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => ArenaAmenitiesWhereInputObjectSchema),
        z.lazy(() => ArenaAmenitiesWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => ArenaAmenitiesWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => ArenaAmenitiesWhereInputObjectSchema),
        z.lazy(() => ArenaAmenitiesWhereInputObjectSchema).array(),
      ])
      .optional(),
    id: z.union([z.lazy(() => IntFilterObjectSchema), z.number()]).optional(),
    indoor: z
      .union([
        z.lazy(() => EnumAMENITIYFilterObjectSchema),
        z.lazy(() => AMENITIYSchema),
      ])
      .optional(),
    covered: z
      .union([
        z.lazy(() => EnumAMENITIYFilterObjectSchema),
        z.lazy(() => AMENITIYSchema),
      ])
      .optional(),
    outdoor: z
      .union([
        z.lazy(() => EnumAMENITIYFilterObjectSchema),
        z.lazy(() => AMENITIYSchema),
      ])
      .optional(),
    food: z
      .union([z.lazy(() => BoolFilterObjectSchema), z.boolean()])
      .optional(),
    alcohol: z
      .union([z.lazy(() => BoolFilterObjectSchema), z.boolean()])
      .optional(),
    parking: z
      .union([
        z.lazy(() => EnumPARKINGFilterObjectSchema),
        z.lazy(() => PARKINGSchema),
      ])
      .optional(),
    shuttleAvailable: z
      .union([z.lazy(() => BoolFilterObjectSchema), z.boolean()])
      .optional(),
    Arena: z.lazy(() => ArenaListRelationFilterObjectSchema).optional(),
    Event: z.lazy(() => EventListRelationFilterObjectSchema).optional(),
  })
  .strict();

export const ArenaAmenitiesWhereInputObjectSchema = Schema;
