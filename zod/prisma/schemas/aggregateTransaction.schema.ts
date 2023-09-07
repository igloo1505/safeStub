import { z } from 'zod';
import { TransactionOrderByWithRelationAndSearchRelevanceInputObjectSchema } from './objects/TransactionOrderByWithRelationAndSearchRelevanceInput.schema';
import { TransactionWhereInputObjectSchema } from './objects/TransactionWhereInput.schema';
import { TransactionWhereUniqueInputObjectSchema } from './objects/TransactionWhereUniqueInput.schema';
import { TransactionCountAggregateInputObjectSchema } from './objects/TransactionCountAggregateInput.schema';
import { TransactionMinAggregateInputObjectSchema } from './objects/TransactionMinAggregateInput.schema';
import { TransactionMaxAggregateInputObjectSchema } from './objects/TransactionMaxAggregateInput.schema';
import { TransactionAvgAggregateInputObjectSchema } from './objects/TransactionAvgAggregateInput.schema';
import { TransactionSumAggregateInputObjectSchema } from './objects/TransactionSumAggregateInput.schema';

export const TransactionAggregateSchema = z.object({
  orderBy: z
    .union([
      TransactionOrderByWithRelationAndSearchRelevanceInputObjectSchema,
      TransactionOrderByWithRelationAndSearchRelevanceInputObjectSchema.array(),
    ])
    .optional(),
  where: TransactionWhereInputObjectSchema.optional(),
  cursor: TransactionWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  _count: z
    .union([z.literal(true), TransactionCountAggregateInputObjectSchema])
    .optional(),
  _min: TransactionMinAggregateInputObjectSchema.optional(),
  _max: TransactionMaxAggregateInputObjectSchema.optional(),
  _avg: TransactionAvgAggregateInputObjectSchema.optional(),
  _sum: TransactionSumAggregateInputObjectSchema.optional(),
});
