import { z } from 'zod';
import { TransactionSelectObjectSchema } from './objects/TransactionSelect.schema';
import { TransactionIncludeObjectSchema } from './objects/TransactionInclude.schema';
import { TransactionOrderByWithRelationAndSearchRelevanceInputObjectSchema } from './objects/TransactionOrderByWithRelationAndSearchRelevanceInput.schema';
import { TransactionWhereInputObjectSchema } from './objects/TransactionWhereInput.schema';
import { TransactionWhereUniqueInputObjectSchema } from './objects/TransactionWhereUniqueInput.schema';
import { TransactionScalarFieldEnumSchema } from './enums/TransactionScalarFieldEnum.schema';

export const TransactionFindFirstSchema = z.object({
  select: TransactionSelectObjectSchema.optional(),
  include: TransactionIncludeObjectSchema.optional(),
  orderBy: z
    .union([
      TransactionOrderByWithRelationAndSearchRelevanceInputObjectSchema,
      TransactionOrderByWithRelationAndSearchRelevanceInputObjectSchema.array(),
    ])
    .optional(),
  where: TransactionWhereInputObjectSchema.optional(),
  cursor: TransactionWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.array(TransactionScalarFieldEnumSchema).optional(),
});
