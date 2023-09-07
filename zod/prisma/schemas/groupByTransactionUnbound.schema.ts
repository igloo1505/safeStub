import { z } from 'zod';
import { TransactionUnboundWhereInputObjectSchema } from './objects/TransactionUnboundWhereInput.schema';
import { TransactionUnboundOrderByWithAggregationInputObjectSchema } from './objects/TransactionUnboundOrderByWithAggregationInput.schema';
import { TransactionUnboundScalarWhereWithAggregatesInputObjectSchema } from './objects/TransactionUnboundScalarWhereWithAggregatesInput.schema';
import { TransactionUnboundScalarFieldEnumSchema } from './enums/TransactionUnboundScalarFieldEnum.schema';

export const TransactionUnboundGroupBySchema = z.object({
  where: TransactionUnboundWhereInputObjectSchema.optional(),
  orderBy: z
    .union([
      TransactionUnboundOrderByWithAggregationInputObjectSchema,
      TransactionUnboundOrderByWithAggregationInputObjectSchema.array(),
    ])
    .optional(),
  having:
    TransactionUnboundScalarWhereWithAggregatesInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  by: z.array(TransactionUnboundScalarFieldEnumSchema),
});
