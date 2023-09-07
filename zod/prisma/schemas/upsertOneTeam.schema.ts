import { z } from 'zod';
import { TeamSelectObjectSchema } from './objects/TeamSelect.schema';
import { TeamIncludeObjectSchema } from './objects/TeamInclude.schema';
import { TeamWhereUniqueInputObjectSchema } from './objects/TeamWhereUniqueInput.schema';
import { TeamCreateInputObjectSchema } from './objects/TeamCreateInput.schema';
import { TeamUncheckedCreateInputObjectSchema } from './objects/TeamUncheckedCreateInput.schema';
import { TeamUpdateInputObjectSchema } from './objects/TeamUpdateInput.schema';
import { TeamUncheckedUpdateInputObjectSchema } from './objects/TeamUncheckedUpdateInput.schema';

export const TeamUpsertSchema = z.object({
  select: TeamSelectObjectSchema.optional(),
  include: TeamIncludeObjectSchema.optional(),
  where: TeamWhereUniqueInputObjectSchema,
  create: z.union([
    TeamCreateInputObjectSchema,
    TeamUncheckedCreateInputObjectSchema,
  ]),
  update: z.union([
    TeamUpdateInputObjectSchema,
    TeamUncheckedUpdateInputObjectSchema,
  ]),
});
