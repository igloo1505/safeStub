import { z } from 'zod';
import { PurchaseHistorySelectObjectSchema } from './objects/PurchaseHistorySelect.schema';
import { PurchaseHistoryIncludeObjectSchema } from './objects/PurchaseHistoryInclude.schema';
import { PurchaseHistoryOrderByWithRelationAndSearchRelevanceInputObjectSchema } from './objects/PurchaseHistoryOrderByWithRelationAndSearchRelevanceInput.schema';
import { PurchaseHistoryWhereInputObjectSchema } from './objects/PurchaseHistoryWhereInput.schema';
import { PurchaseHistoryWhereUniqueInputObjectSchema } from './objects/PurchaseHistoryWhereUniqueInput.schema';
import { PurchaseHistoryScalarFieldEnumSchema } from './enums/PurchaseHistoryScalarFieldEnum.schema';

export const PurchaseHistoryFindManySchema = z.object({
  select: z.lazy(() => PurchaseHistorySelectObjectSchema.optional()),
  include: z.lazy(() => PurchaseHistoryIncludeObjectSchema.optional()),
  orderBy: z
    .union([
      PurchaseHistoryOrderByWithRelationAndSearchRelevanceInputObjectSchema,
      PurchaseHistoryOrderByWithRelationAndSearchRelevanceInputObjectSchema.array(),
    ])
    .optional(),
  where: PurchaseHistoryWhereInputObjectSchema.optional(),
  cursor: PurchaseHistoryWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.array(PurchaseHistoryScalarFieldEnumSchema).optional(),
});
