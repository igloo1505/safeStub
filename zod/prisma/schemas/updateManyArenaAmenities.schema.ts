import { z } from 'zod';
import { ArenaAmenitiesUpdateManyMutationInputObjectSchema } from './objects/ArenaAmenitiesUpdateManyMutationInput.schema';
import { ArenaAmenitiesWhereInputObjectSchema } from './objects/ArenaAmenitiesWhereInput.schema';

export const ArenaAmenitiesUpdateManySchema = z.object({
  data: ArenaAmenitiesUpdateManyMutationInputObjectSchema,
  where: ArenaAmenitiesWhereInputObjectSchema.optional(),
});
