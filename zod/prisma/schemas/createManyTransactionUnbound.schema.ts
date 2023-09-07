import { z } from 'zod';
import { TransactionUnboundCreateManyInputObjectSchema } from './objects/TransactionUnboundCreateManyInput.schema';

export const TransactionUnboundCreateManySchema = z.object({
  data: z.union([
    TransactionUnboundCreateManyInputObjectSchema,
    z.array(TransactionUnboundCreateManyInputObjectSchema),
  ]),
  skipDuplicates: z.boolean().optional(),
});
