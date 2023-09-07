import { z } from 'zod';
import { TransactionUnboundSelectObjectSchema } from './objects/TransactionUnboundSelect.schema';
import { TransactionUnboundUpdateInputObjectSchema } from './objects/TransactionUnboundUpdateInput.schema';
import { TransactionUnboundUncheckedUpdateInputObjectSchema } from './objects/TransactionUnboundUncheckedUpdateInput.schema';
import { TransactionUnboundWhereUniqueInputObjectSchema } from './objects/TransactionUnboundWhereUniqueInput.schema';

export const TransactionUnboundUpdateOneSchema = z.object({
  select: TransactionUnboundSelectObjectSchema.optional(),
  data: z.union([
    TransactionUnboundUpdateInputObjectSchema,
    TransactionUnboundUncheckedUpdateInputObjectSchema,
  ]),
  where: TransactionUnboundWhereUniqueInputObjectSchema,
});
