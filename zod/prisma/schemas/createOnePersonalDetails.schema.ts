import { z } from 'zod';
import { PersonalDetailsSelectObjectSchema } from './objects/PersonalDetailsSelect.schema';
import { PersonalDetailsIncludeObjectSchema } from './objects/PersonalDetailsInclude.schema';
import { PersonalDetailsCreateInputObjectSchema } from './objects/PersonalDetailsCreateInput.schema';
import { PersonalDetailsUncheckedCreateInputObjectSchema } from './objects/PersonalDetailsUncheckedCreateInput.schema';

export const PersonalDetailsCreateOneSchema = z.object({
  select: PersonalDetailsSelectObjectSchema.optional(),
  include: PersonalDetailsIncludeObjectSchema.optional(),
  data: z.union([
    PersonalDetailsCreateInputObjectSchema,
    PersonalDetailsUncheckedCreateInputObjectSchema,
  ]),
});
