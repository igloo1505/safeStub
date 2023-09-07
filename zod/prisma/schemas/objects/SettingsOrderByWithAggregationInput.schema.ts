import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SettingsCountOrderByAggregateInputObjectSchema } from './SettingsCountOrderByAggregateInput.schema';
import { SettingsAvgOrderByAggregateInputObjectSchema } from './SettingsAvgOrderByAggregateInput.schema';
import { SettingsMaxOrderByAggregateInputObjectSchema } from './SettingsMaxOrderByAggregateInput.schema';
import { SettingsMinOrderByAggregateInputObjectSchema } from './SettingsMinOrderByAggregateInput.schema';
import { SettingsSumOrderByAggregateInputObjectSchema } from './SettingsSumOrderByAggregateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SettingsOrderByWithAggregationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    darkmode: z.lazy(() => SortOrderSchema).optional(),
    userId: z.lazy(() => SortOrderSchema).optional(),
    _count: z
      .lazy(() => SettingsCountOrderByAggregateInputObjectSchema)
      .optional(),
    _avg: z.lazy(() => SettingsAvgOrderByAggregateInputObjectSchema).optional(),
    _max: z.lazy(() => SettingsMaxOrderByAggregateInputObjectSchema).optional(),
    _min: z.lazy(() => SettingsMinOrderByAggregateInputObjectSchema).optional(),
    _sum: z.lazy(() => SettingsSumOrderByAggregateInputObjectSchema).optional(),
  })
  .strict();

export const SettingsOrderByWithAggregationInputObjectSchema = Schema;
