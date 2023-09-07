import { z } from 'zod';
import { ArenaWhereInputObjectSchema } from './objects/ArenaWhereInput.schema';

export const ArenaDeleteManySchema = z.object({
  where: ArenaWhereInputObjectSchema.optional(),
});
