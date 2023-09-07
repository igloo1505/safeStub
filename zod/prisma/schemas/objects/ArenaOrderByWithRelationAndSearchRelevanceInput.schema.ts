import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { EventOrderByRelationAggregateInputObjectSchema } from './EventOrderByRelationAggregateInput.schema';
import { LocationOrderByWithRelationAndSearchRelevanceInputObjectSchema } from './LocationOrderByWithRelationAndSearchRelevanceInput.schema';
import { ArenaSectionOrderByRelationAggregateInputObjectSchema } from './ArenaSectionOrderByRelationAggregateInput.schema';
import { ArenaAmenitiesOrderByWithRelationAndSearchRelevanceInputObjectSchema } from './ArenaAmenitiesOrderByWithRelationAndSearchRelevanceInput.schema';
import { ImageOrderByWithRelationAndSearchRelevanceInputObjectSchema } from './ImageOrderByWithRelationAndSearchRelevanceInput.schema';
import { TeamOrderByRelationAggregateInputObjectSchema } from './TeamOrderByRelationAggregateInput.schema';
import { ArenaOrderByRelevanceInputObjectSchema } from './ArenaOrderByRelevanceInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ArenaOrderByWithRelationAndSearchRelevanceInput> =
  z
    .object({
      id: z.lazy(() => SortOrderSchema).optional(),
      uniqueKey: z
        .union([
          z.lazy(() => SortOrderSchema),
          z.lazy(() => SortOrderInputObjectSchema),
        ])
        .optional(),
      name: z.lazy(() => SortOrderSchema).optional(),
      arenaAmenitiesId: z.lazy(() => SortOrderSchema).optional(),
      locationId: z.lazy(() => SortOrderSchema).optional(),
      sectionImageId: z
        .union([
          z.lazy(() => SortOrderSchema),
          z.lazy(() => SortOrderInputObjectSchema),
        ])
        .optional(),
      events: z
        .lazy(() => EventOrderByRelationAggregateInputObjectSchema)
        .optional(),
      location: z
        .lazy(
          () => LocationOrderByWithRelationAndSearchRelevanceInputObjectSchema,
        )
        .optional(),
      sections: z
        .lazy(() => ArenaSectionOrderByRelationAggregateInputObjectSchema)
        .optional(),
      amenities: z
        .lazy(
          () =>
            ArenaAmenitiesOrderByWithRelationAndSearchRelevanceInputObjectSchema,
        )
        .optional(),
      sectionImage: z
        .lazy(() => ImageOrderByWithRelationAndSearchRelevanceInputObjectSchema)
        .optional(),
      homeTeams: z
        .lazy(() => TeamOrderByRelationAggregateInputObjectSchema)
        .optional(),
      _relevance: z
        .lazy(() => ArenaOrderByRelevanceInputObjectSchema)
        .optional(),
    })
    .strict();

export const ArenaOrderByWithRelationAndSearchRelevanceInputObjectSchema =
  Schema;
