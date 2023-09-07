import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { ColorsOrderByWithRelationAndSearchRelevanceInputObjectSchema } from './ColorsOrderByWithRelationAndSearchRelevanceInput.schema';
import { ArenaOrderByWithRelationAndSearchRelevanceInputObjectSchema } from './ArenaOrderByWithRelationAndSearchRelevanceInput.schema';
import { EventOrderByWithRelationAndSearchRelevanceInputObjectSchema } from './EventOrderByWithRelationAndSearchRelevanceInput.schema';
import { LogoOrderByRelationAggregateInputObjectSchema } from './LogoOrderByRelationAggregateInput.schema';
import { TeamOrderByRelevanceInputObjectSchema } from './TeamOrderByRelevanceInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TeamOrderByWithRelationAndSearchRelevanceInput> =
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
      abbreviation: z
        .union([
          z.lazy(() => SortOrderSchema),
          z.lazy(() => SortOrderInputObjectSchema),
        ])
        .optional(),
      displayName: z
        .union([
          z.lazy(() => SortOrderSchema),
          z.lazy(() => SortOrderInputObjectSchema),
        ])
        .optional(),
      displayName_short: z
        .union([
          z.lazy(() => SortOrderSchema),
          z.lazy(() => SortOrderInputObjectSchema),
        ])
        .optional(),
      nickname: z
        .union([
          z.lazy(() => SortOrderSchema),
          z.lazy(() => SortOrderInputObjectSchema),
        ])
        .optional(),
      league: z.lazy(() => SortOrderSchema).optional(),
      sport: z.lazy(() => SortOrderSchema).optional(),
      conference: z
        .union([
          z.lazy(() => SortOrderSchema),
          z.lazy(() => SortOrderInputObjectSchema),
        ])
        .optional(),
      division: z
        .union([
          z.lazy(() => SortOrderSchema),
          z.lazy(() => SortOrderInputObjectSchema),
        ])
        .optional(),
      homeArenaId: z
        .union([
          z.lazy(() => SortOrderSchema),
          z.lazy(() => SortOrderInputObjectSchema),
        ])
        .optional(),
      eventId: z
        .union([
          z.lazy(() => SortOrderSchema),
          z.lazy(() => SortOrderInputObjectSchema),
        ])
        .optional(),
      colorsId: z
        .union([
          z.lazy(() => SortOrderSchema),
          z.lazy(() => SortOrderInputObjectSchema),
        ])
        .optional(),
      colors: z
        .lazy(
          () => ColorsOrderByWithRelationAndSearchRelevanceInputObjectSchema,
        )
        .optional(),
      homeArena: z
        .lazy(() => ArenaOrderByWithRelationAndSearchRelevanceInputObjectSchema)
        .optional(),
      Event: z
        .lazy(() => EventOrderByWithRelationAndSearchRelevanceInputObjectSchema)
        .optional(),
      logos: z
        .lazy(() => LogoOrderByRelationAggregateInputObjectSchema)
        .optional(),
      _relevance: z
        .lazy(() => TeamOrderByRelevanceInputObjectSchema)
        .optional(),
    })
    .strict();

export const TeamOrderByWithRelationAndSearchRelevanceInputObjectSchema =
  Schema;
