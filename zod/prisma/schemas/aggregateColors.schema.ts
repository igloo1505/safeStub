import { z } from 'zod';
import { ColorsOrderByWithRelationAndSearchRelevanceInputObjectSchema } from './objects/ColorsOrderByWithRelationAndSearchRelevanceInput.schema';
import { ColorsWhereInputObjectSchema } from './objects/ColorsWhereInput.schema';
import { ColorsWhereUniqueInputObjectSchema } from './objects/ColorsWhereUniqueInput.schema';
import { ColorsCountAggregateInputObjectSchema } from './objects/ColorsCountAggregateInput.schema';
import { ColorsMinAggregateInputObjectSchema } from './objects/ColorsMinAggregateInput.schema';
import { ColorsMaxAggregateInputObjectSchema } from './objects/ColorsMaxAggregateInput.schema';
import { ColorsAvgAggregateInputObjectSchema } from './objects/ColorsAvgAggregateInput.schema';
import { ColorsSumAggregateInputObjectSchema } from './objects/ColorsSumAggregateInput.schema';

export const ColorsAggregateSchema = z.object({
  orderBy: z
    .union([
      ColorsOrderByWithRelationAndSearchRelevanceInputObjectSchema,
      ColorsOrderByWithRelationAndSearchRelevanceInputObjectSchema.array(),
    ])
    .optional(),
  where: ColorsWhereInputObjectSchema.optional(),
  cursor: ColorsWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  _count: z
    .union([z.literal(true), ColorsCountAggregateInputObjectSchema])
    .optional(),
  _min: ColorsMinAggregateInputObjectSchema.optional(),
  _max: ColorsMaxAggregateInputObjectSchema.optional(),
  _avg: ColorsAvgAggregateInputObjectSchema.optional(),
  _sum: ColorsSumAggregateInputObjectSchema.optional(),
});
