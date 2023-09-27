import { z } from 'zod';
import { EventArgsObjectSchema } from './EventArgs.schema';
import { TicketGroupArgsObjectSchema } from './TicketGroupArgs.schema';
import { UserArgsObjectSchema } from './UserArgs.schema';
import { TransactionArgsObjectSchema } from './TransactionArgs.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TicketInclude> = z
  .object({
    Event: z
      .union([z.boolean(), z.lazy(() => EventArgsObjectSchema)])
      .optional(),
    TicketGroup: z
      .union([z.boolean(), z.lazy(() => TicketGroupArgsObjectSchema)])
      .optional(),
    seller: z
      .union([z.boolean(), z.lazy(() => UserArgsObjectSchema)])
      .optional(),
    buyer: z
      .union([z.boolean(), z.lazy(() => UserArgsObjectSchema)])
      .optional(),
    transaction: z
      .union([z.boolean(), z.lazy(() => TransactionArgsObjectSchema)])
      .optional(),
  })
  .strict();

export const TicketIncludeObjectSchema = Schema;
