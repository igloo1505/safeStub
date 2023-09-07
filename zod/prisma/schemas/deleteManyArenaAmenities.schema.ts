import { z } from 'zod';
import { ArenaAmenitiesWhereInputObjectSchema } from './objects/ArenaAmenitiesWhereInput.schema';

export const ArenaAmenitiesDeleteManySchema = z.object({
  where: ArenaAmenitiesWhereInputObjectSchema.optional(),
});
