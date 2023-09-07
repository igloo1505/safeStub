import { z } from 'zod';
import { TransactionUnboundSelectObjectSchema } from './objects/TransactionUnboundSelect.schema';
import { TransactionUnboundOrderByWithRelationAndSearchRelevanceInputObjectSchema } from './objects/TransactionUnboundOrderByWithRelationAndSearchRelevanceInput.schema';
import { TransactionUnboundWhereInputObjectSchema } from './objects/TransactionUnboundWhereInput.schema';
import { TransactionUnboundWhereUniqueInputObjectSchema } from './objects/TransactionUnboundWhereUniqueInput.schema';
import { TransactionUnboundScalarFieldEnumSchema } from './enums/TransactionUnboundScalarFieldEnum.schema';

export const TransactionUnboundFindManySchema = z.object({
  select: z.lazy(() => TransactionUnboundSelectObjectSchema.optional()),
  orderBy: z
    .union([
      TransactionUnboundOrderByWithRelationAndSearchRelevanceInputObjectSchema,
      TransactionUnboundOrderByWithRelationAndSearchRelevanceInputObjectSchema.array(),
    ])
    .optional(),
  where: TransactionUnboundWhereInputObjectSchema.optional(),
  cursor: TransactionUnboundWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.array(TransactionUnboundScalarFieldEnumSchema).optional(),
});
