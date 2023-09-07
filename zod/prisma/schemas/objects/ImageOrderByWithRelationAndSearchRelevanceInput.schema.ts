import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { ArenaOrderByRelationAggregateInputObjectSchema } from './ArenaOrderByRelationAggregateInput.schema';
import { ImageOrderByRelevanceInputObjectSchema } from './ImageOrderByRelevanceInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ImageOrderByWithRelationAndSearchRelevanceInput> =
  z
    .object({
      id: z.lazy(() => SortOrderSchema).optional(),
      publicUrl: z
        .union([
          z.lazy(() => SortOrderSchema),
          z.lazy(() => SortOrderInputObjectSchema),
        ])
        .optional(),
      createdAt: z.lazy(() => SortOrderSchema).optional(),
      updatedAt: z.lazy(() => SortOrderSchema).optional(),
      Arena: z
        .lazy(() => ArenaOrderByRelationAggregateInputObjectSchema)
        .optional(),
      _relevance: z
        .lazy(() => ImageOrderByRelevanceInputObjectSchema)
        .optional(),
    })
    .strict();

export const ImageOrderByWithRelationAndSearchRelevanceInputObjectSchema =
  Schema;
