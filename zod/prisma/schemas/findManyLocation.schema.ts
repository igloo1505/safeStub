import { z } from 'zod';
import { LocationSelectObjectSchema } from './objects/LocationSelect.schema';
import { LocationIncludeObjectSchema } from './objects/LocationInclude.schema';
import { LocationOrderByWithRelationAndSearchRelevanceInputObjectSchema } from './objects/LocationOrderByWithRelationAndSearchRelevanceInput.schema';
import { LocationWhereInputObjectSchema } from './objects/LocationWhereInput.schema';
import { LocationWhereUniqueInputObjectSchema } from './objects/LocationWhereUniqueInput.schema';
import { LocationScalarFieldEnumSchema } from './enums/LocationScalarFieldEnum.schema';

export const LocationFindManySchema = z.object({
  select: z.lazy(() => LocationSelectObjectSchema.optional()),
  include: z.lazy(() => LocationIncludeObjectSchema.optional()),
  orderBy: z
    .union([
      LocationOrderByWithRelationAndSearchRelevanceInputObjectSchema,
      LocationOrderByWithRelationAndSearchRelevanceInputObjectSchema.array(),
    ])
    .optional(),
  where: LocationWhereInputObjectSchema.optional(),
  cursor: LocationWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.array(LocationScalarFieldEnumSchema).optional(),
});
