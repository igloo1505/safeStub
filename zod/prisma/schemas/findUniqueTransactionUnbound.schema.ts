import { z } from 'zod';
import { TransactionUnboundSelectObjectSchema } from './objects/TransactionUnboundSelect.schema';
import { TransactionUnboundWhereUniqueInputObjectSchema } from './objects/TransactionUnboundWhereUniqueInput.schema';

export const TransactionUnboundFindUniqueSchema = z.object({
  select: TransactionUnboundSelectObjectSchema.optional(),
  where: TransactionUnboundWhereUniqueInputObjectSchema,
});
