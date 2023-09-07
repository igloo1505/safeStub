import { z } from 'zod';
import { PurchaseHistorySelectObjectSchema } from './objects/PurchaseHistorySelect.schema';
import { PurchaseHistoryIncludeObjectSchema } from './objects/PurchaseHistoryInclude.schema';
import { PurchaseHistoryCreateInputObjectSchema } from './objects/PurchaseHistoryCreateInput.schema';
import { PurchaseHistoryUncheckedCreateInputObjectSchema } from './objects/PurchaseHistoryUncheckedCreateInput.schema';

export const PurchaseHistoryCreateOneSchema = z.object({
  select: PurchaseHistorySelectObjectSchema.optional(),
  include: PurchaseHistoryIncludeObjectSchema.optional(),
  data: z.union([
    PurchaseHistoryCreateInputObjectSchema,
    PurchaseHistoryUncheckedCreateInputObjectSchema,
  ]),
});
