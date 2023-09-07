import { z } from 'zod';
import { SettingsSelectObjectSchema } from './objects/SettingsSelect.schema';
import { SettingsIncludeObjectSchema } from './objects/SettingsInclude.schema';
import { SettingsUpdateInputObjectSchema } from './objects/SettingsUpdateInput.schema';
import { SettingsUncheckedUpdateInputObjectSchema } from './objects/SettingsUncheckedUpdateInput.schema';
import { SettingsWhereUniqueInputObjectSchema } from './objects/SettingsWhereUniqueInput.schema';

export const SettingsUpdateOneSchema = z.object({
  select: SettingsSelectObjectSchema.optional(),
  include: SettingsIncludeObjectSchema.optional(),
  data: z.union([
    SettingsUpdateInputObjectSchema,
    SettingsUncheckedUpdateInputObjectSchema,
  ]),
  where: SettingsWhereUniqueInputObjectSchema,
});
