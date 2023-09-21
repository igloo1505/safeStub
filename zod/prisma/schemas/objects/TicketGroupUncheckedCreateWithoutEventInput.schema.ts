import { z } from 'zod';
import { TicketUncheckedCreateNestedManyWithoutTicketGroupInputObjectSchema } from './TicketUncheckedCreateNestedManyWithoutTicketGroupInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TicketGroupUncheckedCreateWithoutEventInput> = z
  .object({
    id: z.number().optional(),
    confirmationId: z.string(),
    sellerId: z.string(),
    buyerId: z.string().optional().nullable(),
    tickets: z
      .lazy(
        () =>
          TicketUncheckedCreateNestedManyWithoutTicketGroupInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const TicketGroupUncheckedCreateWithoutEventInputObjectSchema = Schema;
