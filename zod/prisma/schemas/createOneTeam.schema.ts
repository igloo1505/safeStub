import { z } from 'zod';
import { TeamSelectObjectSchema } from './objects/TeamSelect.schema';
import { TeamIncludeObjectSchema } from './objects/TeamInclude.schema';
import { TeamCreateInputObjectSchema } from './objects/TeamCreateInput.schema';
import { TeamUncheckedCreateInputObjectSchema } from './objects/TeamUncheckedCreateInput.schema';

export const TeamCreateOneSchema = z.object({
  select: TeamSelectObjectSchema.optional(),
  include: TeamIncludeObjectSchema.optional(),
  data: z.union([
    TeamCreateInputObjectSchema,
    TeamUncheckedCreateInputObjectSchema,
  ]),
});
