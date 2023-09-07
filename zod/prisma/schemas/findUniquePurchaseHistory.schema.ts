import { z } from 'zod';
import { PurchaseHistorySelectObjectSchema } from './objects/PurchaseHistorySelect.schema';
import { PurchaseHistoryIncludeObjectSchema } from './objects/PurchaseHistoryInclude.schema';
import { PurchaseHistoryWhereUniqueInputObjectSchema } from './objects/PurchaseHistoryWhereUniqueInput.schema';

export const PurchaseHistoryFindUniqueSchema = z.object({
  select: PurchaseHistorySelectObjectSchema.optional(),
  include: PurchaseHistoryIncludeObjectSchema.optional(),
  where: PurchaseHistoryWhereUniqueInputObjectSchema,
});
