import { z } from 'zod';
import { PersonalDetailsSelectObjectSchema } from './objects/PersonalDetailsSelect.schema';
import { PersonalDetailsIncludeObjectSchema } from './objects/PersonalDetailsInclude.schema';
import { PersonalDetailsUpdateInputObjectSchema } from './objects/PersonalDetailsUpdateInput.schema';
import { PersonalDetailsUncheckedUpdateInputObjectSchema } from './objects/PersonalDetailsUncheckedUpdateInput.schema';
import { PersonalDetailsWhereUniqueInputObjectSchema } from './objects/PersonalDetailsWhereUniqueInput.schema';

export const PersonalDetailsUpdateOneSchema = z.object({
  select: PersonalDetailsSelectObjectSchema.optional(),
  include: PersonalDetailsIncludeObjectSchema.optional(),
  data: z.union([
    PersonalDetailsUpdateInputObjectSchema,
    PersonalDetailsUncheckedUpdateInputObjectSchema,
  ]),
  where: PersonalDetailsWhereUniqueInputObjectSchema,
});
