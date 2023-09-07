import { z } from 'zod';
import { PersonalDetailsCreateManyInputObjectSchema } from './objects/PersonalDetailsCreateManyInput.schema';

export const PersonalDetailsCreateManySchema = z.object({
  data: z.union([
    PersonalDetailsCreateManyInputObjectSchema,
    z.array(PersonalDetailsCreateManyInputObjectSchema),
  ]),
  skipDuplicates: z.boolean().optional(),
});
