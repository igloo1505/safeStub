import { z } from 'zod';
import { PersonalDetailsSelectObjectSchema } from './objects/PersonalDetailsSelect.schema';
import { PersonalDetailsIncludeObjectSchema } from './objects/PersonalDetailsInclude.schema';
import { PersonalDetailsWhereUniqueInputObjectSchema } from './objects/PersonalDetailsWhereUniqueInput.schema';
import { PersonalDetailsCreateInputObjectSchema } from './objects/PersonalDetailsCreateInput.schema';
import { PersonalDetailsUncheckedCreateInputObjectSchema } from './objects/PersonalDetailsUncheckedCreateInput.schema';
import { PersonalDetailsUpdateInputObjectSchema } from './objects/PersonalDetailsUpdateInput.schema';
import { PersonalDetailsUncheckedUpdateInputObjectSchema } from './objects/PersonalDetailsUncheckedUpdateInput.schema';

export const PersonalDetailsUpsertSchema = z.object({
  select: PersonalDetailsSelectObjectSchema.optional(),
  include: PersonalDetailsIncludeObjectSchema.optional(),
  where: PersonalDetailsWhereUniqueInputObjectSchema,
  create: z.union([
    PersonalDetailsCreateInputObjectSchema,
    PersonalDetailsUncheckedCreateInputObjectSchema,
  ]),
  update: z.union([
    PersonalDetailsUpdateInputObjectSchema,
    PersonalDetailsUncheckedUpdateInputObjectSchema,
  ]),
});
