import { z } from 'zod';
import { PurchaseHistorySelectObjectSchema } from './objects/PurchaseHistorySelect.schema';
import { PurchaseHistoryIncludeObjectSchema } from './objects/PurchaseHistoryInclude.schema';
import { PurchaseHistoryUpdateInputObjectSchema } from './objects/PurchaseHistoryUpdateInput.schema';
import { PurchaseHistoryUncheckedUpdateInputObjectSchema } from './objects/PurchaseHistoryUncheckedUpdateInput.schema';
import { PurchaseHistoryWhereUniqueInputObjectSchema } from './objects/PurchaseHistoryWhereUniqueInput.schema';

export const PurchaseHistoryUpdateOneSchema = z.object({
  select: PurchaseHistorySelectObjectSchema.optional(),
  include: PurchaseHistoryIncludeObjectSchema.optional(),
  data: z.union([
    PurchaseHistoryUpdateInputObjectSchema,
    PurchaseHistoryUncheckedUpdateInputObjectSchema,
  ]),
  where: PurchaseHistoryWhereUniqueInputObjectSchema,
});
