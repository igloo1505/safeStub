import { z } from 'zod';
import { ColorsSelectObjectSchema } from './objects/ColorsSelect.schema';
import { ColorsIncludeObjectSchema } from './objects/ColorsInclude.schema';
import { ColorsOrderByWithRelationAndSearchRelevanceInputObjectSchema } from './objects/ColorsOrderByWithRelationAndSearchRelevanceInput.schema';
import { ColorsWhereInputObjectSchema } from './objects/ColorsWhereInput.schema';
import { ColorsWhereUniqueInputObjectSchema } from './objects/ColorsWhereUniqueInput.schema';
import { ColorsScalarFieldEnumSchema } from './enums/ColorsScalarFieldEnum.schema';

export const ColorsFindManySchema = z.object({
  select: z.lazy(() => ColorsSelectObjectSchema.optional()),
  include: z.lazy(() => ColorsIncludeObjectSchema.optional()),
  orderBy: z
    .union([
      ColorsOrderByWithRelationAndSearchRelevanceInputObjectSchema,
      ColorsOrderByWithRelationAndSearchRelevanceInputObjectSchema.array(),
    ])
    .optional(),
  where: ColorsWhereInputObjectSchema.optional(),
  cursor: ColorsWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.array(ColorsScalarFieldEnumSchema).optional(),
});
