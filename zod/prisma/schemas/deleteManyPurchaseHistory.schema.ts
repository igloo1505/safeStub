import { z } from 'zod';
import { PurchaseHistoryWhereInputObjectSchema } from './objects/PurchaseHistoryWhereInput.schema';

export const PurchaseHistoryDeleteManySchema = z.object({
  where: PurchaseHistoryWhereInputObjectSchema.optional(),
});
