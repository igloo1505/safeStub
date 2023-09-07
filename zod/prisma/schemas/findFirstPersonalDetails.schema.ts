import { z } from 'zod';
import { PersonalDetailsSelectObjectSchema } from './objects/PersonalDetailsSelect.schema';
import { PersonalDetailsIncludeObjectSchema } from './objects/PersonalDetailsInclude.schema';
import { PersonalDetailsOrderByWithRelationAndSearchRelevanceInputObjectSchema } from './objects/PersonalDetailsOrderByWithRelationAndSearchRelevanceInput.schema';
import { PersonalDetailsWhereInputObjectSchema } from './objects/PersonalDetailsWhereInput.schema';
import { PersonalDetailsWhereUniqueInputObjectSchema } from './objects/PersonalDetailsWhereUniqueInput.schema';
import { PersonalDetailsScalarFieldEnumSchema } from './enums/PersonalDetailsScalarFieldEnum.schema';

export const PersonalDetailsFindFirstSchema = z.object({
  select: PersonalDetailsSelectObjectSchema.optional(),
  include: PersonalDetailsIncludeObjectSchema.optional(),
  orderBy: z
    .union([
      PersonalDetailsOrderByWithRelationAndSearchRelevanceInputObjectSchema,
      PersonalDetailsOrderByWithRelationAndSearchRelevanceInputObjectSchema.array(),
    ])
    .optional(),
  where: PersonalDetailsWhereInputObjectSchema.optional(),
  cursor: PersonalDetailsWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.array(PersonalDetailsScalarFieldEnumSchema).optional(),
});
