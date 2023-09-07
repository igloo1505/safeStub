import { z } from 'zod';
import { ArenaSelectObjectSchema } from './objects/ArenaSelect.schema';
import { ArenaIncludeObjectSchema } from './objects/ArenaInclude.schema';
import { ArenaOrderByWithRelationAndSearchRelevanceInputObjectSchema } from './objects/ArenaOrderByWithRelationAndSearchRelevanceInput.schema';
import { ArenaWhereInputObjectSchema } from './objects/ArenaWhereInput.schema';
import { ArenaWhereUniqueInputObjectSchema } from './objects/ArenaWhereUniqueInput.schema';
import { ArenaScalarFieldEnumSchema } from './enums/ArenaScalarFieldEnum.schema';

export const ArenaFindFirstSchema = z.object({
  select: ArenaSelectObjectSchema.optional(),
  include: ArenaIncludeObjectSchema.optional(),
  orderBy: z
    .union([
      ArenaOrderByWithRelationAndSearchRelevanceInputObjectSchema,
      ArenaOrderByWithRelationAndSearchRelevanceInputObjectSchema.array(),
    ])
    .optional(),
  where: ArenaWhereInputObjectSchema.optional(),
  cursor: ArenaWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.array(ArenaScalarFieldEnumSchema).optional(),
});
