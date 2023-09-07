import { z } from 'zod';
import { PurchaseHistoryOrderByWithRelationAndSearchRelevanceInputObjectSchema } from './objects/PurchaseHistoryOrderByWithRelationAndSearchRelevanceInput.schema';
import { PurchaseHistoryWhereInputObjectSchema } from './objects/PurchaseHistoryWhereInput.schema';
import { PurchaseHistoryWhereUniqueInputObjectSchema } from './objects/PurchaseHistoryWhereUniqueInput.schema';
import { PurchaseHistoryCountAggregateInputObjectSchema } from './objects/PurchaseHistoryCountAggregateInput.schema';
import { PurchaseHistoryMinAggregateInputObjectSchema } from './objects/PurchaseHistoryMinAggregateInput.schema';
import { PurchaseHistoryMaxAggregateInputObjectSchema } from './objects/PurchaseHistoryMaxAggregateInput.schema';
import { PurchaseHistoryAvgAggregateInputObjectSchema } from './objects/PurchaseHistoryAvgAggregateInput.schema';
import { PurchaseHistorySumAggregateInputObjectSchema } from './objects/PurchaseHistorySumAggregateInput.schema';

export const PurchaseHistoryAggregateSchema = z.object({
  orderBy: z
    .union([
      PurchaseHistoryOrderByWithRelationAndSearchRelevanceInputObjectSchema,
      PurchaseHistoryOrderByWithRelationAndSearchRelevanceInputObjectSchema.array(),
    ])
    .optional(),
  where: PurchaseHistoryWhereInputObjectSchema.optional(),
  cursor: PurchaseHistoryWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  _count: z
    .union([z.literal(true), PurchaseHistoryCountAggregateInputObjectSchema])
    .optional(),
  _min: PurchaseHistoryMinAggregateInputObjectSchema.optional(),
  _max: PurchaseHistoryMaxAggregateInputObjectSchema.optional(),
  _avg: PurchaseHistoryAvgAggregateInputObjectSchema.optional(),
  _sum: PurchaseHistorySumAggregateInputObjectSchema.optional(),
});
