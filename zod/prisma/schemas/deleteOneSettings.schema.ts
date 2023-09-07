import { z } from 'zod';
import { SettingsSelectObjectSchema } from './objects/SettingsSelect.schema';
import { SettingsIncludeObjectSchema } from './objects/SettingsInclude.schema';
import { SettingsWhereUniqueInputObjectSchema } from './objects/SettingsWhereUniqueInput.schema';

export const SettingsDeleteOneSchema = z.object({
  select: SettingsSelectObjectSchema.optional(),
  include: SettingsIncludeObjectSchema.optional(),
  where: SettingsWhereUniqueInputObjectSchema,
});
