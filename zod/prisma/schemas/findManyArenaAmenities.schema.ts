import { z } from 'zod';
import { ArenaAmenitiesSelectObjectSchema } from './objects/ArenaAmenitiesSelect.schema';
import { ArenaAmenitiesIncludeObjectSchema } from './objects/ArenaAmenitiesInclude.schema';
import { ArenaAmenitiesOrderByWithRelationAndSearchRelevanceInputObjectSchema } from './objects/ArenaAmenitiesOrderByWithRelationAndSearchRelevanceInput.schema';
import { ArenaAmenitiesWhereInputObjectSchema } from './objects/ArenaAmenitiesWhereInput.schema';
import { ArenaAmenitiesWhereUniqueInputObjectSchema } from './objects/ArenaAmenitiesWhereUniqueInput.schema';
import { ArenaAmenitiesScalarFieldEnumSchema } from './enums/ArenaAmenitiesScalarFieldEnum.schema';

export const ArenaAmenitiesFindManySchema = z.object({
  select: z.lazy(() => ArenaAmenitiesSelectObjectSchema.optional()),
  include: z.lazy(() => ArenaAmenitiesIncludeObjectSchema.optional()),
  orderBy: z
    .union([
      ArenaAmenitiesOrderByWithRelationAndSearchRelevanceInputObjectSchema,
      ArenaAmenitiesOrderByWithRelationAndSearchRelevanceInputObjectSchema.array(),
    ])
    .optional(),
  where: ArenaAmenitiesWhereInputObjectSchema.optional(),
  cursor: ArenaAmenitiesWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.array(ArenaAmenitiesScalarFieldEnumSchema).optional(),
});
