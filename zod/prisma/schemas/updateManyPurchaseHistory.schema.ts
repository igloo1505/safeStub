import { z } from 'zod';
import { PurchaseHistoryUpdateManyMutationInputObjectSchema } from './objects/PurchaseHistoryUpdateManyMutationInput.schema';
import { PurchaseHistoryWhereInputObjectSchema } from './objects/PurchaseHistoryWhereInput.schema';

export const PurchaseHistoryUpdateManySchema = z.object({
  data: PurchaseHistoryUpdateManyMutationInputObjectSchema,
  where: PurchaseHistoryWhereInputObjectSchema.optional(),
});
