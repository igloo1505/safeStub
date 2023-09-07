import { z } from 'zod';
import { ArenaCreateManyInputObjectSchema } from './objects/ArenaCreateManyInput.schema';

export const ArenaCreateManySchema = z.object({
  data: z.union([
    ArenaCreateManyInputObjectSchema,
    z.array(ArenaCreateManyInputObjectSchema),
  ]),
  skipDuplicates: z.boolean().optional(),
});
