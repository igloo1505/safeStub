import { z } from 'zod';
import { IntWithAggregatesFilterObjectSchema } from './IntWithAggregatesFilter.schema';
import { EnumAMENITIYWithAggregatesFilterObjectSchema } from './EnumAMENITIYWithAggregatesFilter.schema';
import { AMENITIYSchema } from '../enums/AMENITIY.schema';
import { BoolWithAggregatesFilterObjectSchema } from './BoolWithAggregatesFilter.schema';
import { EnumPARKINGWithAggregatesFilterObjectSchema } from './EnumPARKINGWithAggregatesFilter.schema';
import { PARKINGSchema } from '../enums/PARKING.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ArenaAmenitiesScalarWhereWithAggregatesInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => ArenaAmenitiesScalarWhereWithAggregatesInputObjectSchema),
        z
          .lazy(() => ArenaAmenitiesScalarWhereWithAggregatesInputObjectSchema)
          .array(),
      ])
      .optional(),
    OR: z
      .lazy(() => ArenaAmenitiesScalarWhereWithAggregatesInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => ArenaAmenitiesScalarWhereWithAggregatesInputObjectSchema),
        z
          .lazy(() => ArenaAmenitiesScalarWhereWithAggregatesInputObjectSchema)
          .array(),
      ])
      .optional(),
    id: z
      .union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number()])
      .optional(),
    indoor: z
      .union([
        z.lazy(() => EnumAMENITIYWithAggregatesFilterObjectSchema),
        z.lazy(() => AMENITIYSchema),
      ])
      .optional(),
    covered: z
      .union([
        z.lazy(() => EnumAMENITIYWithAggregatesFilterObjectSchema),
        z.lazy(() => AMENITIYSchema),
      ])
      .optional(),
    outdoor: z
      .union([
        z.lazy(() => EnumAMENITIYWithAggregatesFilterObjectSchema),
        z.lazy(() => AMENITIYSchema),
      ])
      .optional(),
    food: z
      .union([z.lazy(() => BoolWithAggregatesFilterObjectSchema), z.boolean()])
      .optional(),
    alcohol: z
      .union([z.lazy(() => BoolWithAggregatesFilterObjectSchema), z.boolean()])
      .optional(),
    parking: z
      .union([
        z.lazy(() => EnumPARKINGWithAggregatesFilterObjectSchema),
        z.lazy(() => PARKINGSchema),
      ])
      .optional(),
    shuttleAvailable: z
      .union([z.lazy(() => BoolWithAggregatesFilterObjectSchema), z.boolean()])
      .optional(),
  })
  .strict();

export const ArenaAmenitiesScalarWhereWithAggregatesInputObjectSchema = Schema;
