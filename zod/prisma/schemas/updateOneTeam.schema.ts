import { z } from 'zod';
import { TeamSelectObjectSchema } from './objects/TeamSelect.schema';
import { TeamIncludeObjectSchema } from './objects/TeamInclude.schema';
import { TeamUpdateInputObjectSchema } from './objects/TeamUpdateInput.schema';
import { TeamUncheckedUpdateInputObjectSchema } from './objects/TeamUncheckedUpdateInput.schema';
import { TeamWhereUniqueInputObjectSchema } from './objects/TeamWhereUniqueInput.schema';

export const TeamUpdateOneSchema = z.object({
  select: TeamSelectObjectSchema.optional(),
  include: TeamIncludeObjectSchema.optional(),
  data: z.union([
    TeamUpdateInputObjectSchema,
    TeamUncheckedUpdateInputObjectSchema,
  ]),
  where: TeamWhereUniqueInputObjectSchema,
});
