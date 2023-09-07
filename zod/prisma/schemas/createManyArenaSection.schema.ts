import { z } from 'zod';
import { ArenaSectionCreateManyInputObjectSchema } from './objects/ArenaSectionCreateManyInput.schema';

export const ArenaSectionCreateManySchema = z.object({
  data: z.union([
    ArenaSectionCreateManyInputObjectSchema,
    z.array(ArenaSectionCreateManyInputObjectSchema),
  ]),
  skipDuplicates: z.boolean().optional(),
});
