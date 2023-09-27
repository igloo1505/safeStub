import { z } from 'zod';
import { PurchaseHistoryArgsObjectSchema } from './PurchaseHistoryArgs.schema';
import { TicketFindManySchema } from '../findManyTicket.schema';
import { TicketGroupFindManySchema } from '../findManyTicketGroup.schema';
import { TransactionCountOutputTypeArgsObjectSchema } from './TransactionCountOutputTypeArgs.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TransactionSelect> = z
  .object({
    id: z.boolean().optional(),
    listedPrice: z.boolean().optional(),
    sellerId: z.boolean().optional(),
    buyerId: z.boolean().optional(),
    seller: z
      .union([z.boolean(), z.lazy(() => PurchaseHistoryArgsObjectSchema)])
      .optional(),
    buyer: z
      .union([z.boolean(), z.lazy(() => PurchaseHistoryArgsObjectSchema)])
      .optional(),
    tickets: z
      .union([z.boolean(), z.lazy(() => TicketFindManySchema)])
      .optional(),
    ticketGroups: z
      .union([z.boolean(), z.lazy(() => TicketGroupFindManySchema)])
      .optional(),
    status: z.boolean().optional(),
    total: z.boolean().optional(),
    payout: z.boolean().optional(),
    payoutMethod: z.boolean().optional(),
    postedOn: z.boolean().optional(),
    purchasedOn: z.boolean().optional(),
    _count: z
      .union([
        z.boolean(),
        z.lazy(() => TransactionCountOutputTypeArgsObjectSchema),
      ])
      .optional(),
  })
  .strict();

export const TransactionSelectObjectSchema = Schema;
