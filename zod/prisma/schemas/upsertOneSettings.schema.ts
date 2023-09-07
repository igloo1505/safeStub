import { z } from 'zod';
import { SettingsSelectObjectSchema } from './objects/SettingsSelect.schema';
import { SettingsIncludeObjectSchema } from './objects/SettingsInclude.schema';
import { SettingsWhereUniqueInputObjectSchema } from './objects/SettingsWhereUniqueInput.schema';
import { SettingsCreateInputObjectSchema } from './objects/SettingsCreateInput.schema';
import { SettingsUncheckedCreateInputObjectSchema } from './objects/SettingsUncheckedCreateInput.schema';
import { SettingsUpdateInputObjectSchema } from './objects/SettingsUpdateInput.schema';
import { SettingsUncheckedUpdateInputObjectSchema } from './objects/SettingsUncheckedUpdateInput.schema';

export const SettingsUpsertSchema = z.object({
  select: SettingsSelectObjectSchema.optional(),
  include: SettingsIncludeObjectSchema.optional(),
  where: SettingsWhereUniqueInputObjectSchema,
  create: z.union([
    SettingsCreateInputObjectSchema,
    SettingsUncheckedCreateInputObjectSchema,
  ]),
  update: z.union([
    SettingsUpdateInputObjectSchema,
    SettingsUncheckedUpdateInputObjectSchema,
  ]),
});
