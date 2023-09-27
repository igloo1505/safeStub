import { z } from 'zod';
import { TicketUncheckedCreateNestedManyWithoutTicketGroupInputObjectSchema } from './TicketUncheckedCreateNestedManyWithoutTicketGroupInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TicketGroupUncheckedCreateInput> = z
  .object({
    id: z.number().optional(),
    eventId: z.number().optional().nullable(),
    transactionId: z.number().optional().nullable(),
    confirmationId: z.string(),
    tickets: z
      .lazy(
        () =>
          TicketUncheckedCreateNestedManyWithoutTicketGroupInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const TicketGroupUncheckedCreateInputObjectSchema = Schema;
