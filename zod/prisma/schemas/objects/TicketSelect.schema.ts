import { z } from 'zod';
import { EventArgsObjectSchema } from './EventArgs.schema';
import { TicketGroupArgsObjectSchema } from './TicketGroupArgs.schema';
import { UserArgsObjectSchema } from './UserArgs.schema';
import { TransactionArgsObjectSchema } from './TransactionArgs.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TicketSelect> = z
  .object({
    id: z.boolean().optional(),
    Event: z
      .union([z.boolean(), z.lazy(() => EventArgsObjectSchema)])
      .optional(),
    eventId: z.boolean().optional(),
    TicketGroup: z
      .union([z.boolean(), z.lazy(() => TicketGroupArgsObjectSchema)])
      .optional(),
    ticketGroupId: z.boolean().optional(),
    section: z.boolean().optional(),
    row: z.boolean().optional(),
    seat: z.boolean().optional(),
    seller: z
      .union([z.boolean(), z.lazy(() => UserArgsObjectSchema)])
      .optional(),
    sellerId: z.boolean().optional(),
    buyer: z
      .union([z.boolean(), z.lazy(() => UserArgsObjectSchema)])
      .optional(),
    buyerId: z.boolean().optional(),
    transaction: z
      .union([z.boolean(), z.lazy(() => TransactionArgsObjectSchema)])
      .optional(),
    transactionId: z.boolean().optional(),
    ticketNumber: z.boolean().optional(),
  })
  .strict();

export const TicketSelectObjectSchema = Schema;
