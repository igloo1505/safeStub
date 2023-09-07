import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { ArenaOrderByRelationAggregateInputObjectSchema } from './ArenaOrderByRelationAggregateInput.schema';
import { PersonalDetailsOrderByWithRelationAndSearchRelevanceInputObjectSchema } from './PersonalDetailsOrderByWithRelationAndSearchRelevanceInput.schema';
import { LocationOrderByRelevanceInputObjectSchema } from './LocationOrderByRelevanceInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.LocationOrderByWithRelationAndSearchRelevanceInput> =
  z
    .object({
      id: z.lazy(() => SortOrderSchema).optional(),
      uniqueKey: z
        .union([
          z.lazy(() => SortOrderSchema),
          z.lazy(() => SortOrderInputObjectSchema),
        ])
        .optional(),
      street: z
        .union([
          z.lazy(() => SortOrderSchema),
          z.lazy(() => SortOrderInputObjectSchema),
        ])
        .optional(),
      zip: z
        .union([
          z.lazy(() => SortOrderSchema),
          z.lazy(() => SortOrderInputObjectSchema),
        ])
        .optional(),
      city: z.lazy(() => SortOrderSchema).optional(),
      cityId: z
        .union([
          z.lazy(() => SortOrderSchema),
          z.lazy(() => SortOrderInputObjectSchema),
        ])
        .optional(),
      state: z
        .union([
          z.lazy(() => SortOrderSchema),
          z.lazy(() => SortOrderInputObjectSchema),
        ])
        .optional(),
      lat: z
        .union([
          z.lazy(() => SortOrderSchema),
          z.lazy(() => SortOrderInputObjectSchema),
        ])
        .optional(),
      long: z
        .union([
          z.lazy(() => SortOrderSchema),
          z.lazy(() => SortOrderInputObjectSchema),
        ])
        .optional(),
      country: z.lazy(() => SortOrderSchema).optional(),
      userId: z
        .union([
          z.lazy(() => SortOrderSchema),
          z.lazy(() => SortOrderInputObjectSchema),
        ])
        .optional(),
      arena: z
        .lazy(() => ArenaOrderByRelationAggregateInputObjectSchema)
        .optional(),
      personalDetails: z
        .lazy(
          () =>
            PersonalDetailsOrderByWithRelationAndSearchRelevanceInputObjectSchema,
        )
        .optional(),
      _relevance: z
        .lazy(() => LocationOrderByRelevanceInputObjectSchema)
        .optional(),
    })
    .strict();

export const LocationOrderByWithRelationAndSearchRelevanceInputObjectSchema =
  Schema;
