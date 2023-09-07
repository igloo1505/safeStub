import { z } from 'zod';
import { PurchaseHistoryWhereInputObjectSchema } from './objects/PurchaseHistoryWhereInput.schema';
import { PurchaseHistoryOrderByWithAggregationInputObjectSchema } from './objects/PurchaseHistoryOrderByWithAggregationInput.schema';
import { PurchaseHistoryScalarWhereWithAggregatesInputObjectSchema } from './objects/PurchaseHistoryScalarWhereWithAggregatesInput.schema';
import { PurchaseHistoryScalarFieldEnumSchema } from './enums/PurchaseHistoryScalarFieldEnum.schema';

export const PurchaseHistoryGroupBySchema = z.object({
  where: PurchaseHistoryWhereInputObjectSchema.optional(),
  orderBy: z
    .union([
      PurchaseHistoryOrderByWithAggregationInputObjectSchema,
      PurchaseHistoryOrderByWithAggregationInputObjectSchema.array(),
    ])
    .optional(),
  having: PurchaseHistoryScalarWhereWithAggregatesInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  by: z.array(PurchaseHistoryScalarFieldEnumSchema),
});
