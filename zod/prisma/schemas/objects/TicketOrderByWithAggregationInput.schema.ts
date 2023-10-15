import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { TicketCountOrderByAggregateInputObjectSchema } from './TicketCountOrderByAggregateInput.schema';
import { TicketAvgOrderByAggregateInputObjectSchema } from './TicketAvgOrderByAggregateInput.schema';
import { TicketMaxOrderByAggregateInputObjectSchema } from './TicketMaxOrderByAggregateInput.schema';
import { TicketMinOrderByAggregateInputObjectSchema } from './TicketMinOrderByAggregateInput.schema';
import { TicketSumOrderByAggregateInputObjectSchema } from './TicketSumOrderByAggregateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TicketOrderByWithAggregationInput> = z
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
    sellerId: z.lazy(() => SortOrderSchema).optional(),
    buyerId: z
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
    ticketNumber: z
      .union([
        z.lazy(() => SortOrderSchema),
        z.lazy(() => SortOrderInputObjectSchema),
      ])
      .optional(),
    status: z.lazy(() => SortOrderSchema).optional(),
    _count: z
      .lazy(() => TicketCountOrderByAggregateInputObjectSchema)
      .optional(),
    _avg: z.lazy(() => TicketAvgOrderByAggregateInputObjectSchema).optional(),
    _max: z.lazy(() => TicketMaxOrderByAggregateInputObjectSchema).optional(),
    _min: z.lazy(() => TicketMinOrderByAggregateInputObjectSchema).optional(),
    _sum: z.lazy(() => TicketSumOrderByAggregateInputObjectSchema).optional(),
  })
  .strict();

export const TicketOrderByWithAggregationInputObjectSchema = Schema;
