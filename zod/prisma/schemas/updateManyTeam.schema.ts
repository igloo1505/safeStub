import { z } from 'zod';
import { TeamUpdateManyMutationInputObjectSchema } from './objects/TeamUpdateManyMutationInput.schema';
import { TeamWhereInputObjectSchema } from './objects/TeamWhereInput.schema';

export const TeamUpdateManySchema = z.object({
  data: TeamUpdateManyMutationInputObjectSchema,
  where: TeamWhereInputObjectSchema.optional(),
});
