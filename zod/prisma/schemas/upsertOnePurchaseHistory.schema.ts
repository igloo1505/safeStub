import { z } from 'zod';
import { PurchaseHistorySelectObjectSchema } from './objects/PurchaseHistorySelect.schema';
import { PurchaseHistoryIncludeObjectSchema } from './objects/PurchaseHistoryInclude.schema';
import { PurchaseHistoryWhereUniqueInputObjectSchema } from './objects/PurchaseHistoryWhereUniqueInput.schema';
import { PurchaseHistoryCreateInputObjectSchema } from './objects/PurchaseHistoryCreateInput.schema';
import { PurchaseHistoryUncheckedCreateInputObjectSchema } from './objects/PurchaseHistoryUncheckedCreateInput.schema';
import { PurchaseHistoryUpdateInputObjectSchema } from './objects/PurchaseHistoryUpdateInput.schema';
import { PurchaseHistoryUncheckedUpdateInputObjectSchema } from './objects/PurchaseHistoryUncheckedUpdateInput.schema';

export const PurchaseHistoryUpsertSchema = z.object({
  select: PurchaseHistorySelectObjectSchema.optional(),
  include: PurchaseHistoryIncludeObjectSchema.optional(),
  where: PurchaseHistoryWhereUniqueInputObjectSchema,
  create: z.union([
    PurchaseHistoryCreateInputObjectSchema,
    PurchaseHistoryUncheckedCreateInputObjectSchema,
  ]),
  update: z.union([
    PurchaseHistoryUpdateInputObjectSchema,
    PurchaseHistoryUncheckedUpdateInputObjectSchema,
  ]),
});
