import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { PersonalDetailsCountOrderByAggregateInputObjectSchema } from './PersonalDetailsCountOrderByAggregateInput.schema';
import { PersonalDetailsAvgOrderByAggregateInputObjectSchema } from './PersonalDetailsAvgOrderByAggregateInput.schema';
import { PersonalDetailsMaxOrderByAggregateInputObjectSchema } from './PersonalDetailsMaxOrderByAggregateInput.schema';
import { PersonalDetailsMinOrderByAggregateInputObjectSchema } from './PersonalDetailsMinOrderByAggregateInput.schema';
import { PersonalDetailsSumOrderByAggregateInputObjectSchema } from './PersonalDetailsSumOrderByAggregateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PersonalDetailsOrderByWithAggregationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    userId: z.lazy(() => SortOrderSchema).optional(),
    _count: z
      .lazy(() => PersonalDetailsCountOrderByAggregateInputObjectSchema)
      .optional(),
    _avg: z
      .lazy(() => PersonalDetailsAvgOrderByAggregateInputObjectSchema)
      .optional(),
    _max: z
      .lazy(() => PersonalDetailsMaxOrderByAggregateInputObjectSchema)
      .optional(),
    _min: z
      .lazy(() => PersonalDetailsMinOrderByAggregateInputObjectSchema)
      .optional(),
    _sum: z
      .lazy(() => PersonalDetailsSumOrderByAggregateInputObjectSchema)
      .optional(),
  })
  .strict();

export const PersonalDetailsOrderByWithAggregationInputObjectSchema = Schema;
