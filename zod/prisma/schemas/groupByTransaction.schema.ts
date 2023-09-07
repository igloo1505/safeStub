import { z } from 'zod';
import { TransactionWhereInputObjectSchema } from './objects/TransactionWhereInput.schema';
import { TransactionOrderByWithAggregationInputObjectSchema } from './objects/TransactionOrderByWithAggregationInput.schema';
import { TransactionScalarWhereWithAggregatesInputObjectSchema } from './objects/TransactionScalarWhereWithAggregatesInput.schema';
import { TransactionScalarFieldEnumSchema } from './enums/TransactionScalarFieldEnum.schema';

export const TransactionGroupBySchema = z.object({
  where: TransactionWhereInputObjectSchema.optional(),
  orderBy: z
    .union([
      TransactionOrderByWithAggregationInputObjectSchema,
      TransactionOrderByWithAggregationInputObjectSchema.array(),
    ])
    .optional(),
  having: TransactionScalarWhereWithAggregatesInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  by: z.array(TransactionScalarFieldEnumSchema),
});
