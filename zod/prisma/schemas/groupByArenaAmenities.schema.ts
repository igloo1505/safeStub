import { z } from 'zod';
import { ArenaAmenitiesWhereInputObjectSchema } from './objects/ArenaAmenitiesWhereInput.schema';
import { ArenaAmenitiesOrderByWithAggregationInputObjectSchema } from './objects/ArenaAmenitiesOrderByWithAggregationInput.schema';
import { ArenaAmenitiesScalarWhereWithAggregatesInputObjectSchema } from './objects/ArenaAmenitiesScalarWhereWithAggregatesInput.schema';
import { ArenaAmenitiesScalarFieldEnumSchema } from './enums/ArenaAmenitiesScalarFieldEnum.schema';

export const ArenaAmenitiesGroupBySchema = z.object({
  where: ArenaAmenitiesWhereInputObjectSchema.optional(),
  orderBy: z
    .union([
      ArenaAmenitiesOrderByWithAggregationInputObjectSchema,
      ArenaAmenitiesOrderByWithAggregationInputObjectSchema.array(),
    ])
    .optional(),
  having: ArenaAmenitiesScalarWhereWithAggregatesInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  by: z.array(ArenaAmenitiesScalarFieldEnumSchema),
});
