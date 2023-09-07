import { z } from 'zod';
import { SettingsSelectObjectSchema } from './objects/SettingsSelect.schema';
import { SettingsIncludeObjectSchema } from './objects/SettingsInclude.schema';
import { SettingsOrderByWithRelationAndSearchRelevanceInputObjectSchema } from './objects/SettingsOrderByWithRelationAndSearchRelevanceInput.schema';
import { SettingsWhereInputObjectSchema } from './objects/SettingsWhereInput.schema';
import { SettingsWhereUniqueInputObjectSchema } from './objects/SettingsWhereUniqueInput.schema';
import { SettingsScalarFieldEnumSchema } from './enums/SettingsScalarFieldEnum.schema';

export const SettingsFindFirstSchema = z.object({
  select: SettingsSelectObjectSchema.optional(),
  include: SettingsIncludeObjectSchema.optional(),
  orderBy: z
    .union([
      SettingsOrderByWithRelationAndSearchRelevanceInputObjectSchema,
      SettingsOrderByWithRelationAndSearchRelevanceInputObjectSchema.array(),
    ])
    .optional(),
  where: SettingsWhereInputObjectSchema.optional(),
  cursor: SettingsWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.array(SettingsScalarFieldEnumSchema).optional(),
});
