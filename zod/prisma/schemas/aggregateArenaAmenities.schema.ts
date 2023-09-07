import { z } from 'zod';
import { ArenaAmenitiesOrderByWithRelationAndSearchRelevanceInputObjectSchema } from './objects/ArenaAmenitiesOrderByWithRelationAndSearchRelevanceInput.schema';
import { ArenaAmenitiesWhereInputObjectSchema } from './objects/ArenaAmenitiesWhereInput.schema';
import { ArenaAmenitiesWhereUniqueInputObjectSchema } from './objects/ArenaAmenitiesWhereUniqueInput.schema';
import { ArenaAmenitiesCountAggregateInputObjectSchema } from './objects/ArenaAmenitiesCountAggregateInput.schema';
import { ArenaAmenitiesMinAggregateInputObjectSchema } from './objects/ArenaAmenitiesMinAggregateInput.schema';
import { ArenaAmenitiesMaxAggregateInputObjectSchema } from './objects/ArenaAmenitiesMaxAggregateInput.schema';
import { ArenaAmenitiesAvgAggregateInputObjectSchema } from './objects/ArenaAmenitiesAvgAggregateInput.schema';
import { ArenaAmenitiesSumAggregateInputObjectSchema } from './objects/ArenaAmenitiesSumAggregateInput.schema';

export const ArenaAmenitiesAggregateSchema = z.object({
  orderBy: z
    .union([
      ArenaAmenitiesOrderByWithRelationAndSearchRelevanceInputObjectSchema,
      ArenaAmenitiesOrderByWithRelationAndSearchRelevanceInputObjectSchema.array(),
    ])
    .optional(),
  where: ArenaAmenitiesWhereInputObjectSchema.optional(),
  cursor: ArenaAmenitiesWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  _count: z
    .union([z.literal(true), ArenaAmenitiesCountAggregateInputObjectSchema])
    .optional(),
  _min: ArenaAmenitiesMinAggregateInputObjectSchema.optional(),
  _max: ArenaAmenitiesMaxAggregateInputObjectSchema.optional(),
  _avg: ArenaAmenitiesAvgAggregateInputObjectSchema.optional(),
  _sum: ArenaAmenitiesSumAggregateInputObjectSchema.optional(),
});
