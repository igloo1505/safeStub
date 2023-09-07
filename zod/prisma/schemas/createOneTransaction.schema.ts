import { z } from 'zod';
import { TransactionSelectObjectSchema } from './objects/TransactionSelect.schema';
import { TransactionIncludeObjectSchema } from './objects/TransactionInclude.schema';
import { TransactionCreateInputObjectSchema } from './objects/TransactionCreateInput.schema';
import { TransactionUncheckedCreateInputObjectSchema } from './objects/TransactionUncheckedCreateInput.schema';

export const TransactionCreateOneSchema = z.object({
  select: TransactionSelectObjectSchema.optional(),
  include: TransactionIncludeObjectSchema.optional(),
  data: z.union([
    TransactionCreateInputObjectSchema,
    TransactionUncheckedCreateInputObjectSchema,
  ]),
});
