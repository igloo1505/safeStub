import { z } from 'zod';
import { EventCreateNestedOneWithoutTicketGroupsInputObjectSchema } from './EventCreateNestedOneWithoutTicketGroupsInput.schema';
import { TicketCreateNestedManyWithoutTicketGroupInputObjectSchema } from './TicketCreateNestedManyWithoutTicketGroupInput.schema';
import { TransactionCreateNestedOneWithoutTicketGroupsInputObjectSchema } from './TransactionCreateNestedOneWithoutTicketGroupsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TicketGroupCreateInput> = z
  .object({
    confirmationId: z.string(),
    Event: z
      .lazy(() => EventCreateNestedOneWithoutTicketGroupsInputObjectSchema)
      .optional(),
    tickets: z
      .lazy(() => TicketCreateNestedManyWithoutTicketGroupInputObjectSchema)
      .optional(),
    transaction: z
      .lazy(
        () => TransactionCreateNestedOneWithoutTicketGroupsInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const TicketGroupCreateInputObjectSchema = Schema;
