import { z } from 'zod';
import { TransactionSelectObjectSchema } from './objects/TransactionSelect.schema';
import { TransactionIncludeObjectSchema } from './objects/TransactionInclude.schema';
import { TransactionWhereUniqueInputObjectSchema } from './objects/TransactionWhereUniqueInput.schema';
import { TransactionCreateInputObjectSchema } from './objects/TransactionCreateInput.schema';
import { TransactionUncheckedCreateInputObjectSchema } from './objects/TransactionUncheckedCreateInput.schema';
import { TransactionUpdateInputObjectSchema } from './objects/TransactionUpdateInput.schema';
import { TransactionUncheckedUpdateInputObjectSchema } from './objects/TransactionUncheckedUpdateInput.schema';

export const TransactionUpsertSchema = z.object({
  select: TransactionSelectObjectSchema.optional(),
  include: TransactionIncludeObjectSchema.optional(),
  where: TransactionWhereUniqueInputObjectSchema,
  create: z.union([
    TransactionCreateInputObjectSchema,
    TransactionUncheckedCreateInputObjectSchema,
  ]),
  update: z.union([
    TransactionUpdateInputObjectSchema,
    TransactionUncheckedUpdateInputObjectSchema,
  ]),
});
