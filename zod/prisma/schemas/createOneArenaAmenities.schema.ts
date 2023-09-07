import { z } from 'zod';
import { ArenaAmenitiesSelectObjectSchema } from './objects/ArenaAmenitiesSelect.schema';
import { ArenaAmenitiesIncludeObjectSchema } from './objects/ArenaAmenitiesInclude.schema';
import { ArenaAmenitiesCreateInputObjectSchema } from './objects/ArenaAmenitiesCreateInput.schema';
import { ArenaAmenitiesUncheckedCreateInputObjectSchema } from './objects/ArenaAmenitiesUncheckedCreateInput.schema';

export const ArenaAmenitiesCreateOneSchema = z.object({
  select: ArenaAmenitiesSelectObjectSchema.optional(),
  include: ArenaAmenitiesIncludeObjectSchema.optional(),
  data: z.union([
    ArenaAmenitiesCreateInputObjectSchema,
    ArenaAmenitiesUncheckedCreateInputObjectSchema,
  ]),
});
