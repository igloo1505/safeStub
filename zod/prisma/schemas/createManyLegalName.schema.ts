import { z } from 'zod';
import { LegalNameCreateManyInputObjectSchema } from './objects/LegalNameCreateManyInput.schema';

export const LegalNameCreateManySchema = z.object({
  data: z.union([
    LegalNameCreateManyInputObjectSchema,
    z.array(LegalNameCreateManyInputObjectSchema),
  ]),
  skipDuplicates: z.boolean().optional(),
});
