import { z } from 'zod';
import { TicketCreateNestedManyWithoutTicketGroupInputObjectSchema } from './TicketCreateNestedManyWithoutTicketGroupInput.schema';
import { TransactionCreateNestedOneWithoutTicketGroupsInputObjectSchema } from './TransactionCreateNestedOneWithoutTicketGroupsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TicketGroupCreateWithoutEventInput> = z
  .object({
    confirmationId: z.string(),
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

export const TicketGroupCreateWithoutEventInputObjectSchema = Schema;
