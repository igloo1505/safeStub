import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { EventOrderByRelationAggregateInputObjectSchema } from './EventOrderByRelationAggregateInput.schema';
import { TagOrderByRelevanceInputObjectSchema } from './TagOrderByRelevanceInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TagOrderByWithRelationAndSearchRelevanceInput> =
  z
    .object({
      id: z.lazy(() => SortOrderSchema).optional(),
      value: z.lazy(() => SortOrderSchema).optional(),
      Event: z
        .lazy(() => EventOrderByRelationAggregateInputObjectSchema)
        .optional(),
      _relevance: z.lazy(() => TagOrderByRelevanceInputObjectSchema).optional(),
    })
    .strict();

export const TagOrderByWithRelationAndSearchRelevanceInputObjectSchema = Schema;
