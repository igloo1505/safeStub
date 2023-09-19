import { z } from 'zod';
import { EventCreateNestedOneWithoutTicketsInputObjectSchema } from './EventCreateNestedOneWithoutTicketsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TicketCreateWithoutTicketGroupInput> = z
  .object({
    section: z.string(),
    row: z.string(),
    seat: z.string(),
    Event: z
      .lazy(() => EventCreateNestedOneWithoutTicketsInputObjectSchema)
      .optional(),
  })
  .strict();

export const TicketCreateWithoutTicketGroupInputObjectSchema = Schema;
