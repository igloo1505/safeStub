import { z } from 'zod';
import { ArenaAmenitiesSelectObjectSchema } from './objects/ArenaAmenitiesSelect.schema';
import { ArenaAmenitiesIncludeObjectSchema } from './objects/ArenaAmenitiesInclude.schema';
import { ArenaAmenitiesUpdateInputObjectSchema } from './objects/ArenaAmenitiesUpdateInput.schema';
import { ArenaAmenitiesUncheckedUpdateInputObjectSchema } from './objects/ArenaAmenitiesUncheckedUpdateInput.schema';
import { ArenaAmenitiesWhereUniqueInputObjectSchema } from './objects/ArenaAmenitiesWhereUniqueInput.schema';

export const ArenaAmenitiesUpdateOneSchema = z.object({
  select: ArenaAmenitiesSelectObjectSchema.optional(),
  include: ArenaAmenitiesIncludeObjectSchema.optional(),
  data: z.union([
    ArenaAmenitiesUpdateInputObjectSchema,
    ArenaAmenitiesUncheckedUpdateInputObjectSchema,
  ]),
  where: ArenaAmenitiesWhereUniqueInputObjectSchema,
});
