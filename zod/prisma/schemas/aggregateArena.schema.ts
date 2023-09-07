import { z } from 'zod';
import { ArenaOrderByWithRelationAndSearchRelevanceInputObjectSchema } from './objects/ArenaOrderByWithRelationAndSearchRelevanceInput.schema';
import { ArenaWhereInputObjectSchema } from './objects/ArenaWhereInput.schema';
import { ArenaWhereUniqueInputObjectSchema } from './objects/ArenaWhereUniqueInput.schema';
import { ArenaCountAggregateInputObjectSchema } from './objects/ArenaCountAggregateInput.schema';
import { ArenaMinAggregateInputObjectSchema } from './objects/ArenaMinAggregateInput.schema';
import { ArenaMaxAggregateInputObjectSchema } from './objects/ArenaMaxAggregateInput.schema';
import { ArenaAvgAggregateInputObjectSchema } from './objects/ArenaAvgAggregateInput.schema';
import { ArenaSumAggregateInputObjectSchema } from './objects/ArenaSumAggregateInput.schema';

export const ArenaAggregateSchema = z.object({
  orderBy: z
    .union([
      ArenaOrderByWithRelationAndSearchRelevanceInputObjectSchema,
      ArenaOrderByWithRelationAndSearchRelevanceInputObjectSchema.array(),
    ])
    .optional(),
  where: ArenaWhereInputObjectSchema.optional(),
  cursor: ArenaWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  _count: z
    .union([z.literal(true), ArenaCountAggregateInputObjectSchema])
    .optional(),
  _min: ArenaMinAggregateInputObjectSchema.optional(),
  _max: ArenaMaxAggregateInputObjectSchema.optional(),
  _avg: ArenaAvgAggregateInputObjectSchema.optional(),
  _sum: ArenaSumAggregateInputObjectSchema.optional(),
});
