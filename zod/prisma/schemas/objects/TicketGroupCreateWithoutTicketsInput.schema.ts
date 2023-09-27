import { z } from 'zod';
import { EventCreateNestedOneWithoutTicketGroupsInputObjectSchema } from './EventCreateNestedOneWithoutTicketGroupsInput.schema';
import { TransactionCreateNestedOneWithoutTicketGroupsInputObjectSchema } from './TransactionCreateNestedOneWithoutTicketGroupsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TicketGroupCreateWithoutTicketsInput> = z
  .object({
    confirmationId: z.string(),
    Event: z
      .lazy(() => EventCreateNestedOneWithoutTicketGroupsInputObjectSchema)
      .optional(),
    transaction: z
      .lazy(
        () => TransactionCreateNestedOneWithoutTicketGroupsInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const TicketGroupCreateWithoutTicketsInputObjectSchema = Schema;
