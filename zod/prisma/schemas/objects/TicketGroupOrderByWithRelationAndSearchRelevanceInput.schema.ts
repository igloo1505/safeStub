import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { EventOrderByWithRelationAndSearchRelevanceInputObjectSchema } from './EventOrderByWithRelationAndSearchRelevanceInput.schema';
import { TicketOrderByRelationAggregateInputObjectSchema } from './TicketOrderByRelationAggregateInput.schema';
import { TransactionOrderByWithRelationAndSearchRelevanceInputObjectSchema } from './TransactionOrderByWithRelationAndSearchRelevanceInput.schema';
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
      transactionId: z
        .union([
          z.lazy(() => SortOrderSchema),
          z.lazy(() => SortOrderInputObjectSchema),
        ])
        .optional(),
      confirmationId: z.lazy(() => SortOrderSchema).optional(),
      Event: z
        .lazy(() => EventOrderByWithRelationAndSearchRelevanceInputObjectSchema)
        .optional(),
      tickets: z
        .lazy(() => TicketOrderByRelationAggregateInputObjectSchema)
        .optional(),
      transaction: z
        .lazy(
          () =>
            TransactionOrderByWithRelationAndSearchRelevanceInputObjectSchema,
        )
        .optional(),
      _relevance: z
        .lazy(() => TicketGroupOrderByRelevanceInputObjectSchema)
        .optional(),
    })
    .strict();

export const TicketGroupOrderByWithRelationAndSearchRelevanceInputObjectSchema =
  Schema;
