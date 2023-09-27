import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { PurchaseHistoryOrderByWithRelationAndSearchRelevanceInputObjectSchema } from './PurchaseHistoryOrderByWithRelationAndSearchRelevanceInput.schema';
import { TicketOrderByRelationAggregateInputObjectSchema } from './TicketOrderByRelationAggregateInput.schema';
import { TicketGroupOrderByRelationAggregateInputObjectSchema } from './TicketGroupOrderByRelationAggregateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TransactionOrderByWithRelationAndSearchRelevanceInput> =
  z
    .object({
      id: z.lazy(() => SortOrderSchema).optional(),
      listedPrice: z.lazy(() => SortOrderSchema).optional(),
      sellerId: z.lazy(() => SortOrderSchema).optional(),
      buyerId: z
        .union([
          z.lazy(() => SortOrderSchema),
          z.lazy(() => SortOrderInputObjectSchema),
        ])
        .optional(),
      status: z.lazy(() => SortOrderSchema).optional(),
      total: z.lazy(() => SortOrderSchema).optional(),
      payout: z.lazy(() => SortOrderSchema).optional(),
      payoutMethod: z.lazy(() => SortOrderSchema).optional(),
      postedOn: z.lazy(() => SortOrderSchema).optional(),
      purchasedOn: z
        .union([
          z.lazy(() => SortOrderSchema),
          z.lazy(() => SortOrderInputObjectSchema),
        ])
        .optional(),
      seller: z
        .lazy(
          () =>
            PurchaseHistoryOrderByWithRelationAndSearchRelevanceInputObjectSchema,
        )
        .optional(),
      buyer: z
        .lazy(
          () =>
            PurchaseHistoryOrderByWithRelationAndSearchRelevanceInputObjectSchema,
        )
        .optional(),
      tickets: z
        .lazy(() => TicketOrderByRelationAggregateInputObjectSchema)
        .optional(),
      ticketGroups: z
        .lazy(() => TicketGroupOrderByRelationAggregateInputObjectSchema)
        .optional(),
    })
    .strict();

export const TransactionOrderByWithRelationAndSearchRelevanceInputObjectSchema =
  Schema;
