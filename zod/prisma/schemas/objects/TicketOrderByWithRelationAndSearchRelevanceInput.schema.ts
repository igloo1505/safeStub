import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { EventOrderByWithRelationAndSearchRelevanceInputObjectSchema } from './EventOrderByWithRelationAndSearchRelevanceInput.schema';
import { TicketGroupOrderByWithRelationAndSearchRelevanceInputObjectSchema } from './TicketGroupOrderByWithRelationAndSearchRelevanceInput.schema';
import { ArenaSectionOrderByWithRelationAndSearchRelevanceInputObjectSchema } from './ArenaSectionOrderByWithRelationAndSearchRelevanceInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TicketOrderByWithRelationAndSearchRelevanceInput> =
  z
    .object({
      id: z.lazy(() => SortOrderSchema).optional(),
      eventId: z
        .union([
          z.lazy(() => SortOrderSchema),
          z.lazy(() => SortOrderInputObjectSchema),
        ])
        .optional(),
      ticketGroupId: z
        .union([
          z.lazy(() => SortOrderSchema),
          z.lazy(() => SortOrderInputObjectSchema),
        ])
        .optional(),
      arenaSectionId: z.lazy(() => SortOrderSchema).optional(),
      Event: z
        .lazy(() => EventOrderByWithRelationAndSearchRelevanceInputObjectSchema)
        .optional(),
      TicketGroup: z
        .lazy(
          () =>
            TicketGroupOrderByWithRelationAndSearchRelevanceInputObjectSchema,
        )
        .optional(),
      arenaSection: z
        .lazy(
          () =>
            ArenaSectionOrderByWithRelationAndSearchRelevanceInputObjectSchema,
        )
        .optional(),
    })
    .strict();

export const TicketOrderByWithRelationAndSearchRelevanceInputObjectSchema =
  Schema;
