import { z } from 'zod';
import { ArenaSectionSelectObjectSchema } from './objects/ArenaSectionSelect.schema';
import { ArenaSectionIncludeObjectSchema } from './objects/ArenaSectionInclude.schema';
import { ArenaSectionOrderByWithRelationAndSearchRelevanceInputObjectSchema } from './objects/ArenaSectionOrderByWithRelationAndSearchRelevanceInput.schema';
import { ArenaSectionWhereInputObjectSchema } from './objects/ArenaSectionWhereInput.schema';
import { ArenaSectionWhereUniqueInputObjectSchema } from './objects/ArenaSectionWhereUniqueInput.schema';
import { ArenaSectionScalarFieldEnumSchema } from './enums/ArenaSectionScalarFieldEnum.schema';

export const ArenaSectionFindFirstSchema = z.object({
  select: ArenaSectionSelectObjectSchema.optional(),
  include: ArenaSectionIncludeObjectSchema.optional(),
  orderBy: z
    .union([
      ArenaSectionOrderByWithRelationAndSearchRelevanceInputObjectSchema,
      ArenaSectionOrderByWithRelationAndSearchRelevanceInputObjectSchema.array(),
    ])
    .optional(),
  where: ArenaSectionWhereInputObjectSchema.optional(),
  cursor: ArenaSectionWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.array(ArenaSectionScalarFieldEnumSchema).optional(),
});
