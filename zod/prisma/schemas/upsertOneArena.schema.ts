import { z } from 'zod';
import { ArenaSelectObjectSchema } from './objects/ArenaSelect.schema';
import { ArenaIncludeObjectSchema } from './objects/ArenaInclude.schema';
import { ArenaWhereUniqueInputObjectSchema } from './objects/ArenaWhereUniqueInput.schema';
import { ArenaCreateInputObjectSchema } from './objects/ArenaCreateInput.schema';
import { ArenaUncheckedCreateInputObjectSchema } from './objects/ArenaUncheckedCreateInput.schema';
import { ArenaUpdateInputObjectSchema } from './objects/ArenaUpdateInput.schema';
import { ArenaUncheckedUpdateInputObjectSchema } from './objects/ArenaUncheckedUpdateInput.schema';

export const ArenaUpsertSchema = z.object({
  select: ArenaSelectObjectSchema.optional(),
  include: ArenaIncludeObjectSchema.optional(),
  where: ArenaWhereUniqueInputObjectSchema,
  create: z.union([
    ArenaCreateInputObjectSchema,
    ArenaUncheckedCreateInputObjectSchema,
  ]),
  update: z.union([
    ArenaUpdateInputObjectSchema,
    ArenaUncheckedUpdateInputObjectSchema,
  ]),
});
