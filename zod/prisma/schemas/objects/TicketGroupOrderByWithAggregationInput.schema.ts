import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { TicketGroupCountOrderByAggregateInputObjectSchema } from './TicketGroupCountOrderByAggregateInput.schema';
import { TicketGroupAvgOrderByAggregateInputObjectSchema } from './TicketGroupAvgOrderByAggregateInput.schema';
import { TicketGroupMaxOrderByAggregateInputObjectSchema } from './TicketGroupMaxOrderByAggregateInput.schema';
import { TicketGroupMinOrderByAggregateInputObjectSchema } from './TicketGroupMinOrderByAggregateInput.schema';
import { TicketGroupSumOrderByAggregateInputObjectSchema } from './TicketGroupSumOrderByAggregateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TicketGroupOrderByWithAggregationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    eventId: z
      .union([
        z.lazy(() => SortOrderSchema),
        z.lazy(() => SortOrderInputObjectSchema),
      ])
      .optional(),
    confirmationId: z.lazy(() => SortOrderSchema).optional(),
    _count: z
      .lazy(() => TicketGroupCountOrderByAggregateInputObjectSchema)
      .optional(),
    _avg: z
      .lazy(() => TicketGroupAvgOrderByAggregateInputObjectSchema)
      .optional(),
    _max: z
      .lazy(() => TicketGroupMaxOrderByAggregateInputObjectSchema)
      .optional(),
    _min: z
      .lazy(() => TicketGroupMinOrderByAggregateInputObjectSchema)
      .optional(),
    _sum: z
      .lazy(() => TicketGroupSumOrderByAggregateInputObjectSchema)
      .optional(),
  })
  .strict();

export const TicketGroupOrderByWithAggregationInputObjectSchema = Schema;
