import { z } from 'zod';
import { SettingsCreateManyInputObjectSchema } from './objects/SettingsCreateManyInput.schema';

export const SettingsCreateManySchema = z.object({
  data: z.union([
    SettingsCreateManyInputObjectSchema,
    z.array(SettingsCreateManyInputObjectSchema),
  ]),
  skipDuplicates: z.boolean().optional(),
});
