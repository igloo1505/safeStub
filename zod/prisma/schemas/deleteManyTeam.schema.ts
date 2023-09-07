import { z } from 'zod';
import { TeamWhereInputObjectSchema } from './objects/TeamWhereInput.schema';

export const TeamDeleteManySchema = z.object({
  where: TeamWhereInputObjectSchema.optional(),
});
