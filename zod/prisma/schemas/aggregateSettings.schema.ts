import { z } from 'zod';
import { SettingsOrderByWithRelationAndSearchRelevanceInputObjectSchema } from './objects/SettingsOrderByWithRelationAndSearchRelevanceInput.schema';
import { SettingsWhereInputObjectSchema } from './objects/SettingsWhereInput.schema';
import { SettingsWhereUniqueInputObjectSchema } from './objects/SettingsWhereUniqueInput.schema';
import { SettingsCountAggregateInputObjectSchema } from './objects/SettingsCountAggregateInput.schema';
import { SettingsMinAggregateInputObjectSchema } from './objects/SettingsMinAggregateInput.schema';
import { SettingsMaxAggregateInputObjectSchema } from './objects/SettingsMaxAggregateInput.schema';
import { SettingsAvgAggregateInputObjectSchema } from './objects/SettingsAvgAggregateInput.schema';
import { SettingsSumAggregateInputObjectSchema } from './objects/SettingsSumAggregateInput.schema';

export const SettingsAggregateSchema = z.object({
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
  _count: z
    .union([z.literal(true), SettingsCountAggregateInputObjectSchema])
    .optional(),
  _min: SettingsMinAggregateInputObjectSchema.optional(),
  _max: SettingsMaxAggregateInputObjectSchema.optional(),
  _avg: SettingsAvgAggregateInputObjectSchema.optional(),
  _sum: SettingsSumAggregateInputObjectSchema.optional(),
});
