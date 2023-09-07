import { z } from 'zod';
import { ArenaAmenitiesSelectObjectSchema } from './objects/ArenaAmenitiesSelect.schema';
import { ArenaAmenitiesIncludeObjectSchema } from './objects/ArenaAmenitiesInclude.schema';
import { ArenaAmenitiesWhereUniqueInputObjectSchema } from './objects/ArenaAmenitiesWhereUniqueInput.schema';

export const ArenaAmenitiesDeleteOneSchema = z.object({
  select: ArenaAmenitiesSelectObjectSchema.optional(),
  include: ArenaAmenitiesIncludeObjectSchema.optional(),
  where: ArenaAmenitiesWhereUniqueInputObjectSchema,
});
