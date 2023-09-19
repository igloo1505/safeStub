import { z } from 'zod';
import { EventCreateNestedOneWithoutTicketGroupsInputObjectSchema } from './EventCreateNestedOneWithoutTicketGroupsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TicketGroupCreateWithoutTicketsInput> = z
  .object({
    confirmationId: z.string(),
    Event: z
      .lazy(() => EventCreateNestedOneWithoutTicketGroupsInputObjectSchema)
      .optional(),
  })
  .strict();

export const TicketGroupCreateWithoutTicketsInputObjectSchema = Schema;
