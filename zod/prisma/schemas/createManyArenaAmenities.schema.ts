import { z } from 'zod';
import { ArenaAmenitiesCreateManyInputObjectSchema } from './objects/ArenaAmenitiesCreateManyInput.schema';

export const ArenaAmenitiesCreateManySchema = z.object({
  data: z.union([
    ArenaAmenitiesCreateManyInputObjectSchema,
    z.array(ArenaAmenitiesCreateManyInputObjectSchema),
  ]),
  skipDuplicates: z.boolean().optional(),
});
