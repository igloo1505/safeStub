import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { TeamOrderByRelationAggregateInputObjectSchema } from './TeamOrderByRelationAggregateInput.schema';
import { ColorsOrderByRelevanceInputObjectSchema } from './ColorsOrderByRelevanceInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ColorsOrderByWithRelationAndSearchRelevanceInput> =
  z
    .object({
      id: z.lazy(() => SortOrderSchema).optional(),
      primary: z.lazy(() => SortOrderSchema).optional(),
      secondary: z
        .union([
          z.lazy(() => SortOrderSchema),
          z.lazy(() => SortOrderInputObjectSchema),
        ])
        .optional(),
      Team: z
        .lazy(() => TeamOrderByRelationAggregateInputObjectSchema)
        .optional(),
      _relevance: z
        .lazy(() => ColorsOrderByRelevanceInputObjectSchema)
        .optional(),
    })
    .strict();

export const ColorsOrderByWithRelationAndSearchRelevanceInputObjectSchema =
  Schema;
