import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { EventOrderByWithRelationAndSearchRelevanceInputObjectSchema } from './EventOrderByWithRelationAndSearchRelevanceInput.schema';
import { TicketOrderByRelationAggregateInputObjectSchema } from './TicketOrderByRelationAggregateInput.schema';
import { ArenaSectionOrderByWithRelationAndSearchRelevanceInputObjectSchema } from './ArenaSectionOrderByWithRelationAndSearchRelevanceInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TicketGroupOrderByWithRelationAndSearchRelevanceInput> =
  z
    .object({
      id: z.lazy(() => SortOrderSchema).optional(),
      eventId: z
        .union([
          z.lazy(() => SortOrderSchema),
          z.lazy(() => SortOrderInputObjectSchema),
        ])
        .optional(),
      arenaSectionId: z.lazy(() => SortOrderSchema).optional(),
      Event: z
        .lazy(() => EventOrderByWithRelationAndSearchRelevanceInputObjectSchema)
        .optional(),
      tickets: z
        .lazy(() => TicketOrderByRelationAggregateInputObjectSchema)
        .optional(),
      arenaSection: z
        .lazy(
          () =>
            ArenaSectionOrderByWithRelationAndSearchRelevanceInputObjectSchema,
        )
        .optional(),
    })
    .strict();

export const TicketGroupOrderByWithRelationAndSearchRelevanceInputObjectSchema =
  Schema;
