import { z } from 'zod';
import { LogoCreateManyInputObjectSchema } from './objects/LogoCreateManyInput.schema';

export const LogoCreateManySchema = z.object({
  data: z.union([
    LogoCreateManyInputObjectSchema,
    z.array(LogoCreateManyInputObjectSchema),
  ]),
  skipDuplicates: z.boolean().optional(),
});
