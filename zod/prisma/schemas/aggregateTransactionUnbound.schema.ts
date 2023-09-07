import { z } from 'zod';
import { TransactionUnboundOrderByWithRelationAndSearchRelevanceInputObjectSchema } from './objects/TransactionUnboundOrderByWithRelationAndSearchRelevanceInput.schema';
import { TransactionUnboundWhereInputObjectSchema } from './objects/TransactionUnboundWhereInput.schema';
import { TransactionUnboundWhereUniqueInputObjectSchema } from './objects/TransactionUnboundWhereUniqueInput.schema';
import { TransactionUnboundCountAggregateInputObjectSchema } from './objects/TransactionUnboundCountAggregateInput.schema';
import { TransactionUnboundMinAggregateInputObjectSchema } from './objects/TransactionUnboundMinAggregateInput.schema';
import { TransactionUnboundMaxAggregateInputObjectSchema } from './objects/TransactionUnboundMaxAggregateInput.schema';
import { TransactionUnboundAvgAggregateInputObjectSchema } from './objects/TransactionUnboundAvgAggregateInput.schema';
import { TransactionUnboundSumAggregateInputObjectSchema } from './objects/TransactionUnboundSumAggregateInput.schema';

export const TransactionUnboundAggregateSchema = z.object({
  orderBy: z
    .union([
      TransactionUnboundOrderByWithRelationAndSearchRelevanceInputObjectSchema,
      TransactionUnboundOrderByWithRelationAndSearchRelevanceInputObjectSchema.array(),
    ])
    .optional(),
  where: TransactionUnboundWhereInputObjectSchema.optional(),
  cursor: TransactionUnboundWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  _count: z
    .union([z.literal(true), TransactionUnboundCountAggregateInputObjectSchema])
    .optional(),
  _min: TransactionUnboundMinAggregateInputObjectSchema.optional(),
  _max: TransactionUnboundMaxAggregateInputObjectSchema.optional(),
  _avg: TransactionUnboundAvgAggregateInputObjectSchema.optional(),
  _sum: TransactionUnboundSumAggregateInputObjectSchema.optional(),
});
