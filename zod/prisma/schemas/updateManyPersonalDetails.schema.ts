import { z } from 'zod';
import { PersonalDetailsUpdateManyMutationInputObjectSchema } from './objects/PersonalDetailsUpdateManyMutationInput.schema';
import { PersonalDetailsWhereInputObjectSchema } from './objects/PersonalDetailsWhereInput.schema';

export const PersonalDetailsUpdateManySchema = z.object({
  data: PersonalDetailsUpdateManyMutationInputObjectSchema,
  where: PersonalDetailsWhereInputObjectSchema.optional(),
});
