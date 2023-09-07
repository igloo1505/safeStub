import { z } from 'zod';
import { PersonalDetailsWhereInputObjectSchema } from './objects/PersonalDetailsWhereInput.schema';

export const PersonalDetailsDeleteManySchema = z.object({
  where: PersonalDetailsWhereInputObjectSchema.optional(),
});
