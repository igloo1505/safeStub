import { z } from 'zod';
import { ArenaAmenitiesSelectObjectSchema } from './objects/ArenaAmenitiesSelect.schema';
import { ArenaAmenitiesIncludeObjectSchema } from './objects/ArenaAmenitiesInclude.schema';
import { ArenaAmenitiesWhereUniqueInputObjectSchema } from './objects/ArenaAmenitiesWhereUniqueInput.schema';
import { ArenaAmenitiesCreateInputObjectSchema } from './objects/ArenaAmenitiesCreateInput.schema';
import { ArenaAmenitiesUncheckedCreateInputObjectSchema } from './objects/ArenaAmenitiesUncheckedCreateInput.schema';
import { ArenaAmenitiesUpdateInputObjectSchema } from './objects/ArenaAmenitiesUpdateInput.schema';
import { ArenaAmenitiesUncheckedUpdateInputObjectSchema } from './objects/ArenaAmenitiesUncheckedUpdateInput.schema';

export const ArenaAmenitiesUpsertSchema = z.object({
  select: ArenaAmenitiesSelectObjectSchema.optional(),
  include: ArenaAmenitiesIncludeObjectSchema.optional(),
  where: ArenaAmenitiesWhereUniqueInputObjectSchema,
  create: z.union([
    ArenaAmenitiesCreateInputObjectSchema,
    ArenaAmenitiesUncheckedCreateInputObjectSchema,
  ]),
  update: z.union([
    ArenaAmenitiesUpdateInputObjectSchema,
    ArenaAmenitiesUncheckedUpdateInputObjectSchema,
  ]),
});
