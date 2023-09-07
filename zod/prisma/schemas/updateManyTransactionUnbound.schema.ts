import { z } from 'zod';
import { TransactionUnboundUpdateManyMutationInputObjectSchema } from './objects/TransactionUnboundUpdateManyMutationInput.schema';
import { TransactionUnboundWhereInputObjectSchema } from './objects/TransactionUnboundWhereInput.schema';

export const TransactionUnboundUpdateManySchema = z.object({
  data: TransactionUnboundUpdateManyMutationInputObjectSchema,
  where: TransactionUnboundWhereInputObjectSchema.optional(),
});
