import { z } from 'zod';
import { TransactionSelectObjectSchema } from './objects/TransactionSelect.schema';
import { TransactionIncludeObjectSchema } from './objects/TransactionInclude.schema';
import { TransactionWhereUniqueInputObjectSchema } from './objects/TransactionWhereUniqueInput.schema';

export const TransactionDeleteOneSchema = z.object({
  select: TransactionSelectObjectSchema.optional(),
  include: TransactionIncludeObjectSchema.optional(),
  where: TransactionWhereUniqueInputObjectSchema,
});
