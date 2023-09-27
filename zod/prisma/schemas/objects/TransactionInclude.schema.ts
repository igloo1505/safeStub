import { z } from 'zod';
import { PurchaseHistoryArgsObjectSchema } from './PurchaseHistoryArgs.schema';
import { TicketFindManySchema } from '../findManyTicket.schema';
import { TicketGroupFindManySchema } from '../findManyTicketGroup.schema';
import { TransactionCountOutputTypeArgsObjectSchema } from './TransactionCountOutputTypeArgs.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TransactionInclude> = z
  .object({
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
    _count: z
      .union([
        z.boolean(),
        z.lazy(() => TransactionCountOutputTypeArgsObjectSchema),
      ])
      .optional(),
  })
  .strict();

export const TransactionIncludeObjectSchema = Schema;
