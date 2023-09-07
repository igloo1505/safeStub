import { z } from 'zod';
import { FaqCreateManyInputObjectSchema } from './objects/FaqCreateManyInput.schema';

export const FaqCreateManySchema = z.object({
  data: z.union([
    FaqCreateManyInputObjectSchema,
    z.array(FaqCreateManyInputObjectSchema),
  ]),
  skipDuplicates: z.boolean().optional(),
});
