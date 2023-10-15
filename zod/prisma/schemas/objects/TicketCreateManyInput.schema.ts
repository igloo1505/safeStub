import { z } from 'zod';
import { TicketStatusSchema } from '../enums/TicketStatus.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TicketCreateManyInput> = z
  .object({
    id: z.number().optional(),
    eventId: z.number().optional().nullable(),
    ticketGroupId: z.number().optional().nullable(),
    section: z.string(),
    row: z.string(),
    seat: z.string(),
    sellerId: z.string(),
    buyerId: z.string().optional().nullable(),
    transactionId: z.number().optional().nullable(),
    ticketNumber: z.string().optional().nullable(),
    status: z.lazy(() => TicketStatusSchema).optional(),
  })
  .strict();

export const TicketCreateManyInputObjectSchema = Schema;
