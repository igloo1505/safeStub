import { z } from 'zod';
import { ArenaSelectObjectSchema } from './objects/ArenaSelect.schema';
import { ArenaIncludeObjectSchema } from './objects/ArenaInclude.schema';
import { ArenaUpdateInputObjectSchema } from './objects/ArenaUpdateInput.schema';
import { ArenaUncheckedUpdateInputObjectSchema } from './objects/ArenaUncheckedUpdateInput.schema';
import { ArenaWhereUniqueInputObjectSchema } from './objects/ArenaWhereUniqueInput.schema';

export const ArenaUpdateOneSchema = z.object({
  select: ArenaSelectObjectSchema.optional(),
  include: ArenaIncludeObjectSchema.optional(),
  data: z.union([
    ArenaUpdateInputObjectSchema,
    ArenaUncheckedUpdateInputObjectSchema,
  ]),
  where: ArenaWhereUniqueInputObjectSchema,
});
