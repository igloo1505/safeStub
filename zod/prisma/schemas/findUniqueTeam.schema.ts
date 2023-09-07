import { z } from 'zod';
import { TeamSelectObjectSchema } from './objects/TeamSelect.schema';
import { TeamIncludeObjectSchema } from './objects/TeamInclude.schema';
import { TeamWhereUniqueInputObjectSchema } from './objects/TeamWhereUniqueInput.schema';

export const TeamFindUniqueSchema = z.object({
  select: TeamSelectObjectSchema.optional(),
  include: TeamIncludeObjectSchema.optional(),
  where: TeamWhereUniqueInputObjectSchema,
});
