import { z } from 'zod';
import { TransactionUnboundWhereInputObjectSchema } from './objects/TransactionUnboundWhereInput.schema';

export const TransactionUnboundDeleteManySchema = z.object({
  where: TransactionUnboundWhereInputObjectSchema.optional(),
});
