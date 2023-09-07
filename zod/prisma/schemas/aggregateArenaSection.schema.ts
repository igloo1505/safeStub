import { z } from 'zod';
import { ArenaSectionOrderByWithRelationAndSearchRelevanceInputObjectSchema } from './objects/ArenaSectionOrderByWithRelationAndSearchRelevanceInput.schema';
import { ArenaSectionWhereInputObjectSchema } from './objects/ArenaSectionWhereInput.schema';
import { ArenaSectionWhereUniqueInputObjectSchema } from './objects/ArenaSectionWhereUniqueInput.schema';
import { ArenaSectionCountAggregateInputObjectSchema } from './objects/ArenaSectionCountAggregateInput.schema';
import { ArenaSectionMinAggregateInputObjectSchema } from './objects/ArenaSectionMinAggregateInput.schema';
import { ArenaSectionMaxAggregateInputObjectSchema } from './objects/ArenaSectionMaxAggregateInput.schema';
import { ArenaSectionAvgAggregateInputObjectSchema } from './objects/ArenaSectionAvgAggregateInput.schema';
import { ArenaSectionSumAggregateInputObjectSchema } from './objects/ArenaSectionSumAggregateInput.schema';

export const ArenaSectionAggregateSchema = z.object({
  orderBy: z
    .union([
      ArenaSectionOrderByWithRelationAndSearchRelevanceInputObjectSchema,
      ArenaSectionOrderByWithRelationAndSearchRelevanceInputObjectSchema.array(),
    ])
    .optional(),
  where: ArenaSectionWhereInputObjectSchema.optional(),
  cursor: ArenaSectionWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  _count: z
    .union([z.literal(true), ArenaSectionCountAggregateInputObjectSchema])
    .optional(),
  _min: ArenaSectionMinAggregateInputObjectSchema.optional(),
  _max: ArenaSectionMaxAggregateInputObjectSchema.optional(),
  _avg: ArenaSectionAvgAggregateInputObjectSchema.optional(),
  _sum: ArenaSectionSumAggregateInputObjectSchema.optional(),
});
