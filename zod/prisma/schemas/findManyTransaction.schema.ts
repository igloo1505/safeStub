import { z } from 'zod';
import { TransactionSelectObjectSchema } from './objects/TransactionSelect.schema';
import { TransactionIncludeObjectSchema } from './objects/TransactionInclude.schema';
import { TransactionOrderByWithRelationAndSearchRelevanceInputObjectSchema } from './objects/TransactionOrderByWithRelationAndSearchRelevanceInput.schema';
import { TransactionWhereInputObjectSchema } from './objects/TransactionWhereInput.schema';
import { TransactionWhereUniqueInputObjectSchema } from './objects/TransactionWhereUniqueInput.schema';
import { TransactionScalarFieldEnumSchema } from './enums/TransactionScalarFieldEnum.schema';

export const TransactionFindManySchema = z.object({
  select: z.lazy(() => TransactionSelectObjectSchema.optional()),
  include: z.lazy(() => TransactionIncludeObjectSchema.optional()),
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
