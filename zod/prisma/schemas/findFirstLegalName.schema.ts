import { z } from 'zod';
import { LegalNameSelectObjectSchema } from './objects/LegalNameSelect.schema';
import { LegalNameIncludeObjectSchema } from './objects/LegalNameInclude.schema';
import { LegalNameOrderByWithRelationAndSearchRelevanceInputObjectSchema } from './objects/LegalNameOrderByWithRelationAndSearchRelevanceInput.schema';
import { LegalNameWhereInputObjectSchema } from './objects/LegalNameWhereInput.schema';
import { LegalNameWhereUniqueInputObjectSchema } from './objects/LegalNameWhereUniqueInput.schema';
import { LegalNameScalarFieldEnumSchema } from './enums/LegalNameScalarFieldEnum.schema';

export const LegalNameFindFirstSchema = z.object({
  select: LegalNameSelectObjectSchema.optional(),
  include: LegalNameIncludeObjectSchema.optional(),
  orderBy: z
    .union([
      LegalNameOrderByWithRelationAndSearchRelevanceInputObjectSchema,
      LegalNameOrderByWithRelationAndSearchRelevanceInputObjectSchema.array(),
    ])
    .optional(),
  where: LegalNameWhereInputObjectSchema.optional(),
  cursor: LegalNameWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.array(LegalNameScalarFieldEnumSchema).optional(),
});
