import { z } from 'zod';
import { TeamCreateManyInputObjectSchema } from './objects/TeamCreateManyInput.schema';

export const TeamCreateManySchema = z.object({
  data: z.union([
    TeamCreateManyInputObjectSchema,
    z.array(TeamCreateManyInputObjectSchema),
  ]),
  skipDuplicates: z.boolean().optional(),
});
