import { z } from 'zod';
import { TransactionWhereInputObjectSchema } from './objects/TransactionWhereInput.schema';

export const TransactionDeleteManySchema = z.object({
  where: TransactionWhereInputObjectSchema.optional(),
});
