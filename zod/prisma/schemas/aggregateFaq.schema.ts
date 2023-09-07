import { z } from 'zod';
import { FaqOrderByWithRelationAndSearchRelevanceInputObjectSchema } from './objects/FaqOrderByWithRelationAndSearchRelevanceInput.schema';
import { FaqWhereInputObjectSchema } from './objects/FaqWhereInput.schema';
import { FaqWhereUniqueInputObjectSchema } from './objects/FaqWhereUniqueInput.schema';
import { FaqCountAggregateInputObjectSchema } from './objects/FaqCountAggregateInput.schema';
import { FaqMinAggregateInputObjectSchema } from './objects/FaqMinAggregateInput.schema';
import { FaqMaxAggregateInputObjectSchema } from './objects/FaqMaxAggregateInput.schema';
import { FaqAvgAggregateInputObjectSchema } from './objects/FaqAvgAggregateInput.schema';
import { FaqSumAggregateInputObjectSchema } from './objects/FaqSumAggregateInput.schema';

export const FaqAggregateSchema = z.object({
  orderBy: z
    .union([
      FaqOrderByWithRelationAndSearchRelevanceInputObjectSchema,
      FaqOrderByWithRelationAndSearchRelevanceInputObjectSchema.array(),
    ])
    .optional(),
  where: FaqWhereInputObjectSchema.optional(),
  cursor: FaqWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  _count: z
    .union([z.literal(true), FaqCountAggregateInputObjectSchema])
    .optional(),
  _min: FaqMinAggregateInputObjectSchema.optional(),
  _max: FaqMaxAggregateInputObjectSchema.optional(),
  _avg: FaqAvgAggregateInputObjectSchema.optional(),
  _sum: FaqSumAggregateInputObjectSchema.optional(),
});
