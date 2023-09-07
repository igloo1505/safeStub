import { z } from 'zod';
import { SettingsWhereInputObjectSchema } from './objects/SettingsWhereInput.schema';
import { SettingsOrderByWithAggregationInputObjectSchema } from './objects/SettingsOrderByWithAggregationInput.schema';
import { SettingsScalarWhereWithAggregatesInputObjectSchema } from './objects/SettingsScalarWhereWithAggregatesInput.schema';
import { SettingsScalarFieldEnumSchema } from './enums/SettingsScalarFieldEnum.schema';

export const SettingsGroupBySchema = z.object({
  where: SettingsWhereInputObjectSchema.optional(),
  orderBy: z
    .union([
      SettingsOrderByWithAggregationInputObjectSchema,
      SettingsOrderByWithAggregationInputObjectSchema.array(),
    ])
    .optional(),
  having: SettingsScalarWhereWithAggregatesInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  by: z.array(SettingsScalarFieldEnumSchema),
});
