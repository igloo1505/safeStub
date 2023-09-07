import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TicketMaxOrderByAggregateInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    eventId: z.lazy(() => SortOrderSchema).optional(),
    ticketGroupId: z.lazy(() => SortOrderSchema).optional(),
    arenaSectionId: z.lazy(() => SortOrderSchema).optional(),
  })
  .strict();

export const TicketMaxOrderByAggregateInputObjectSchema = Schema;
