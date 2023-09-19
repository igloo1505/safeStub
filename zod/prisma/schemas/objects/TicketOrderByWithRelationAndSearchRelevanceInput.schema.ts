import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { EventOrderByWithRelationAndSearchRelevanceInputObjectSchema } from './EventOrderByWithRelationAndSearchRelevanceInput.schema';
import { TicketGroupOrderByWithRelationAndSearchRelevanceInputObjectSchema } from './TicketGroupOrderByWithRelationAndSearchRelevanceInput.schema';
import { TicketOrderByRelevanceInputObjectSchema } from './TicketOrderByRelevanceInput.schema';

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
      section: z.lazy(() => SortOrderSchema).optional(),
      row: z.lazy(() => SortOrderSchema).optional(),
      seat: z.lazy(() => SortOrderSchema).optional(),
      Event: z
        .lazy(() => EventOrderByWithRelationAndSearchRelevanceInputObjectSchema)
        .optional(),
      TicketGroup: z
        .lazy(
          () =>
            TicketGroupOrderByWithRelationAndSearchRelevanceInputObjectSchema,
        )
        .optional(),
      _relevance: z
        .lazy(() => TicketOrderByRelevanceInputObjectSchema)
        .optional(),
    })
    .strict();

export const TicketOrderByWithRelationAndSearchRelevanceInputObjectSchema =
  Schema;
