import { z } from 'zod';
import { TeamSelectObjectSchema } from './objects/TeamSelect.schema';
import { TeamIncludeObjectSchema } from './objects/TeamInclude.schema';
import { TeamOrderByWithRelationAndSearchRelevanceInputObjectSchema } from './objects/TeamOrderByWithRelationAndSearchRelevanceInput.schema';
import { TeamWhereInputObjectSchema } from './objects/TeamWhereInput.schema';
import { TeamWhereUniqueInputObjectSchema } from './objects/TeamWhereUniqueInput.schema';
import { TeamScalarFieldEnumSchema } from './enums/TeamScalarFieldEnum.schema';

export const TeamFindManySchema = z.object({
  select: z.lazy(() => TeamSelectObjectSchema.optional()),
  include: z.lazy(() => TeamIncludeObjectSchema.optional()),
  orderBy: z
    .union([
      TeamOrderByWithRelationAndSearchRelevanceInputObjectSchema,
      TeamOrderByWithRelationAndSearchRelevanceInputObjectSchema.array(),
    ])
    .optional(),
  where: TeamWhereInputObjectSchema.optional(),
  cursor: TeamWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.array(TeamScalarFieldEnumSchema).optional(),
});
