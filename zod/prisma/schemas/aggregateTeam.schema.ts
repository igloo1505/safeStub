import { z } from 'zod';
import { TeamOrderByWithRelationAndSearchRelevanceInputObjectSchema } from './objects/TeamOrderByWithRelationAndSearchRelevanceInput.schema';
import { TeamWhereInputObjectSchema } from './objects/TeamWhereInput.schema';
import { TeamWhereUniqueInputObjectSchema } from './objects/TeamWhereUniqueInput.schema';
import { TeamCountAggregateInputObjectSchema } from './objects/TeamCountAggregateInput.schema';
import { TeamMinAggregateInputObjectSchema } from './objects/TeamMinAggregateInput.schema';
import { TeamMaxAggregateInputObjectSchema } from './objects/TeamMaxAggregateInput.schema';
import { TeamAvgAggregateInputObjectSchema } from './objects/TeamAvgAggregateInput.schema';
import { TeamSumAggregateInputObjectSchema } from './objects/TeamSumAggregateInput.schema';

export const TeamAggregateSchema = z.object({
  orderBy: z
    .union([
      TeamOrderByWithRelationAndSearchRelevanceInputObjectSchema,
      TeamOrderByWithRelationAndSearchRelevanceInputObjectSchema.array(),
    ])
    .optional(),
  where: TeamWhereInputObjectSchema.optional(),
  cursor: TeamWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  _count: z
    .union([z.literal(true), TeamCountAggregateInputObjectSchema])
    .optional(),
  _min: TeamMinAggregateInputObjectSchema.optional(),
  _max: TeamMaxAggregateInputObjectSchema.optional(),
  _avg: TeamAvgAggregateInputObjectSchema.optional(),
  _sum: TeamSumAggregateInputObjectSchema.optional(),
});
