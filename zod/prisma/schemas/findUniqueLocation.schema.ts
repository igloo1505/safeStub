import { z } from 'zod';
import { LocationSelectObjectSchema } from './objects/LocationSelect.schema';
import { LocationIncludeObjectSchema } from './objects/LocationInclude.schema';
import { LocationWhereUniqueInputObjectSchema } from './objects/LocationWhereUniqueInput.schema';

export const LocationFindUniqueSchema = z.object({
  select: LocationSelectObjectSchema.optional(),
  include: LocationIncludeObjectSchema.optional(),
  where: LocationWhereUniqueInputObjectSchema,
});
