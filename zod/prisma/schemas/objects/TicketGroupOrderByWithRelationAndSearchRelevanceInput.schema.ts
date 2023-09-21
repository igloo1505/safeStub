import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { EventOrderByWithRelationAndSearchRelevanceInputObjectSchema } from './EventOrderByWithRelationAndSearchRelevanceInput.schema';
import { TicketOrderByRelationAggregateInputObjectSchema } from './TicketOrderByRelationAggregateInput.schema';
import { UserOrderByWithRelationAndSearchRelevanceInputObjectSchema } from './UserOrderByWithRelationAndSearchRelevanceInput.schema';
import { TicketGroupOrderByRelevanceInputObjectSchema } from './TicketGroupOrderByRelevanceInput.schema';

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
      confirmationId: z.lazy(() => SortOrderSchema).optional(),
      sellerId: z.lazy(() => SortOrderSchema).optional(),
      buyerId: z
        .union([
          z.lazy(() => SortOrderSchema),
          z.lazy(() => SortOrderInputObjectSchema),
        ])
        .optional(),
      Event: z
        .lazy(() => EventOrderByWithRelationAndSearchRelevanceInputObjectSchema)
        .optional(),
      tickets: z
        .lazy(() => TicketOrderByRelationAggregateInputObjectSchema)
        .optional(),
      seller: z
        .lazy(() => UserOrderByWithRelationAndSearchRelevanceInputObjectSchema)
        .optional(),
      buyer: z
        .lazy(() => UserOrderByWithRelationAndSearchRelevanceInputObjectSchema)
        .optional(),
      _relevance: z
        .lazy(() => TicketGroupOrderByRelevanceInputObjectSchema)
        .optional(),
    })
    .strict();

export const TicketGroupOrderByWithRelationAndSearchRelevanceInputObjectSchema =
  Schema;
