import { z } from 'zod';
import { ArenaSelectObjectSchema } from './objects/ArenaSelect.schema';
import { ArenaIncludeObjectSchema } from './objects/ArenaInclude.schema';
import { ArenaWhereUniqueInputObjectSchema } from './objects/ArenaWhereUniqueInput.schema';

export const ArenaDeleteOneSchema = z.object({
  select: ArenaSelectObjectSchema.optional(),
  include: ArenaIncludeObjectSchema.optional(),
  where: ArenaWhereUniqueInputObjectSchema,
});
