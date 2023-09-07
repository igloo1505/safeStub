import { z } from 'zod';
import { TransactionUnboundSelectObjectSchema } from './objects/TransactionUnboundSelect.schema';
import { TransactionUnboundCreateInputObjectSchema } from './objects/TransactionUnboundCreateInput.schema';
import { TransactionUnboundUncheckedCreateInputObjectSchema } from './objects/TransactionUnboundUncheckedCreateInput.schema';

export const TransactionUnboundCreateOneSchema = z.object({
  select: TransactionUnboundSelectObjectSchema.optional(),
  data: z.union([
    TransactionUnboundCreateInputObjectSchema,
    TransactionUnboundUncheckedCreateInputObjectSchema,
  ]),
});
