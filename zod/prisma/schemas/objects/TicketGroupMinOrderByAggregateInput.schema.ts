import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TicketGroupMinOrderByAggregateInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    eventId: z.lazy(() => SortOrderSchema).optional(),
    transactionId: z.lazy(() => SortOrderSchema).optional(),
    confirmationId: z.lazy(() => SortOrderSchema).optional(),
  })
  .strict();

export const TicketGroupMinOrderByAggregateInputObjectSchema = Schema;
