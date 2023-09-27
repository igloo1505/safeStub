import { z } from 'zod';
import { TicketUncheckedCreateNestedManyWithoutTicketGroupInputObjectSchema } from './TicketUncheckedCreateNestedManyWithoutTicketGroupInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TicketGroupUncheckedCreateWithoutEventInput> = z
  .object({
    id: z.number().optional(),
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

export const TicketGroupUncheckedCreateWithoutEventInputObjectSchema = Schema;
