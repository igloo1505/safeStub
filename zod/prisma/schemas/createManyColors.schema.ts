import { z } from 'zod';
import { ColorsCreateManyInputObjectSchema } from './objects/ColorsCreateManyInput.schema';

export const ColorsCreateManySchema = z.object({
  data: z.union([
    ColorsCreateManyInputObjectSchema,
    z.array(ColorsCreateManyInputObjectSchema),
  ]),
  skipDuplicates: z.boolean().optional(),
});
