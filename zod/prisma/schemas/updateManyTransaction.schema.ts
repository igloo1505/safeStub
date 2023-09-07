import { z } from 'zod';
import { TransactionUpdateManyMutationInputObjectSchema } from './objects/TransactionUpdateManyMutationInput.schema';
import { TransactionWhereInputObjectSchema } from './objects/TransactionWhereInput.schema';

export const TransactionUpdateManySchema = z.object({
  data: TransactionUpdateManyMutationInputObjectSchema,
  where: TransactionWhereInputObjectSchema.optional(),
});
