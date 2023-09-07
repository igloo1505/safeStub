import { z } from 'zod';
import { ArenaSelectObjectSchema } from './objects/ArenaSelect.schema';
import { ArenaIncludeObjectSchema } from './objects/ArenaInclude.schema';
import { ArenaCreateInputObjectSchema } from './objects/ArenaCreateInput.schema';
import { ArenaUncheckedCreateInputObjectSchema } from './objects/ArenaUncheckedCreateInput.schema';

export const ArenaCreateOneSchema = z.object({
  select: ArenaSelectObjectSchema.optional(),
  include: ArenaIncludeObjectSchema.optional(),
  data: z.union([
    ArenaCreateInputObjectSchema,
    ArenaUncheckedCreateInputObjectSchema,
  ]),
});
