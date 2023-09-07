import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { LegalNameCountOrderByAggregateInputObjectSchema } from './LegalNameCountOrderByAggregateInput.schema';
import { LegalNameAvgOrderByAggregateInputObjectSchema } from './LegalNameAvgOrderByAggregateInput.schema';
import { LegalNameMaxOrderByAggregateInputObjectSchema } from './LegalNameMaxOrderByAggregateInput.schema';
import { LegalNameMinOrderByAggregateInputObjectSchema } from './LegalNameMinOrderByAggregateInput.schema';
import { LegalNameSumOrderByAggregateInputObjectSchema } from './LegalNameSumOrderByAggregateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.LegalNameOrderByWithAggregationInput> = z
  .object({
    first: z.lazy(() => SortOrderSchema).optional(),
    middle: z
      .union([
        z.lazy(() => SortOrderSchema),
        z.lazy(() => SortOrderInputObjectSchema),
      ])
      .optional(),
    last: z.lazy(() => SortOrderSchema).optional(),
    detailsId: z.lazy(() => SortOrderSchema).optional(),
    _count: z
      .lazy(() => LegalNameCountOrderByAggregateInputObjectSchema)
      .optional(),
    _avg: z
      .lazy(() => LegalNameAvgOrderByAggregateInputObjectSchema)
      .optional(),
    _max: z
      .lazy(() => LegalNameMaxOrderByAggregateInputObjectSchema)
      .optional(),
    _min: z
      .lazy(() => LegalNameMinOrderByAggregateInputObjectSchema)
      .optional(),
    _sum: z
      .lazy(() => LegalNameSumOrderByAggregateInputObjectSchema)
      .optional(),
  })
  .strict();

export const LegalNameOrderByWithAggregationInputObjectSchema = Schema;
