import { z } from 'zod';
import { TransactionCreateManyInputObjectSchema } from './objects/TransactionCreateManyInput.schema';

export const TransactionCreateManySchema = z.object({
  data: z.union([
    TransactionCreateManyInputObjectSchema,
    z.array(TransactionCreateManyInputObjectSchema),
  ]),
  skipDuplicates: z.boolean().optional(),
});
