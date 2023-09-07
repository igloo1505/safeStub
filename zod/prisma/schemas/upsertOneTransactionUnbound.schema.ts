import { z } from 'zod';
import { TransactionUnboundSelectObjectSchema } from './objects/TransactionUnboundSelect.schema';
import { TransactionUnboundWhereUniqueInputObjectSchema } from './objects/TransactionUnboundWhereUniqueInput.schema';
import { TransactionUnboundCreateInputObjectSchema } from './objects/TransactionUnboundCreateInput.schema';
import { TransactionUnboundUncheckedCreateInputObjectSchema } from './objects/TransactionUnboundUncheckedCreateInput.schema';
import { TransactionUnboundUpdateInputObjectSchema } from './objects/TransactionUnboundUpdateInput.schema';
import { TransactionUnboundUncheckedUpdateInputObjectSchema } from './objects/TransactionUnboundUncheckedUpdateInput.schema';

export const TransactionUnboundUpsertSchema = z.object({
  select: TransactionUnboundSelectObjectSchema.optional(),
  where: TransactionUnboundWhereUniqueInputObjectSchema,
  create: z.union([
    TransactionUnboundCreateInputObjectSchema,
    TransactionUnboundUncheckedCreateInputObjectSchema,
  ]),
  update: z.union([
    TransactionUnboundUpdateInputObjectSchema,
    TransactionUnboundUncheckedUpdateInputObjectSchema,
  ]),
});
