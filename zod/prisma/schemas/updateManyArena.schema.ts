import { z } from 'zod';
import { ArenaUpdateManyMutationInputObjectSchema } from './objects/ArenaUpdateManyMutationInput.schema';
import { ArenaWhereInputObjectSchema } from './objects/ArenaWhereInput.schema';

export const ArenaUpdateManySchema = z.object({
  data: ArenaUpdateManyMutationInputObjectSchema,
  where: ArenaWhereInputObjectSchema.optional(),
});
