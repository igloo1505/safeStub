import { z } from 'zod';
import { FaqSelectObjectSchema } from './objects/FaqSelect.schema';
import { FaqOrderByWithRelationAndSearchRelevanceInputObjectSchema } from './objects/FaqOrderByWithRelationAndSearchRelevanceInput.schema';
import { FaqWhereInputObjectSchema } from './objects/FaqWhereInput.schema';
import { FaqWhereUniqueInputObjectSchema } from './objects/FaqWhereUniqueInput.schema';
import { FaqScalarFieldEnumSchema } from './enums/FaqScalarFieldEnum.schema';

export const FaqFindFirstSchema = z.object({
  select: FaqSelectObjectSchema.optional(),
  orderBy: z
    .union([
      FaqOrderByWithRelationAndSearchRelevanceInputObjectSchema,
      FaqOrderByWithRelationAndSearchRelevanceInputObjectSchema.array(),
    ])
    .optional(),
  where: FaqWhereInputObjectSchema.optional(),
  cursor: FaqWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.array(FaqScalarFieldEnumSchema).optional(),
});
