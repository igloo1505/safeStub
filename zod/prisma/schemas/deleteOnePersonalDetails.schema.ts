import { z } from 'zod';
import { PersonalDetailsSelectObjectSchema } from './objects/PersonalDetailsSelect.schema';
import { PersonalDetailsIncludeObjectSchema } from './objects/PersonalDetailsInclude.schema';
import { PersonalDetailsWhereUniqueInputObjectSchema } from './objects/PersonalDetailsWhereUniqueInput.schema';

export const PersonalDetailsDeleteOneSchema = z.object({
  select: PersonalDetailsSelectObjectSchema.optional(),
  include: PersonalDetailsIncludeObjectSchema.optional(),
  where: PersonalDetailsWhereUniqueInputObjectSchema,
});
