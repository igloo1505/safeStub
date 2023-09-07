import { z } from 'zod';
import { SettingsSelectObjectSchema } from './objects/SettingsSelect.schema';
import { SettingsIncludeObjectSchema } from './objects/SettingsInclude.schema';
import { SettingsCreateInputObjectSchema } from './objects/SettingsCreateInput.schema';
import { SettingsUncheckedCreateInputObjectSchema } from './objects/SettingsUncheckedCreateInput.schema';

export const SettingsCreateOneSchema = z.object({
  select: SettingsSelectObjectSchema.optional(),
  include: SettingsIncludeObjectSchema.optional(),
  data: z.union([
    SettingsCreateInputObjectSchema,
    SettingsUncheckedCreateInputObjectSchema,
  ]),
});
