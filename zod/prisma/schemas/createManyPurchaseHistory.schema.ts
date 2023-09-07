import { z } from 'zod';
import { PurchaseHistoryCreateManyInputObjectSchema } from './objects/PurchaseHistoryCreateManyInput.schema';

export const PurchaseHistoryCreateManySchema = z.object({
  data: z.union([
    PurchaseHistoryCreateManyInputObjectSchema,
    z.array(PurchaseHistoryCreateManyInputObjectSchema),
  ]),
  skipDuplicates: z.boolean().optional(),
});
