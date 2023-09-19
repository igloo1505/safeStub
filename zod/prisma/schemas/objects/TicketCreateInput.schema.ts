import { z } from 'zod';
import { EventCreateNestedOneWithoutTicketsInputObjectSchema } from './EventCreateNestedOneWithoutTicketsInput.schema';
import { TicketGroupCreateNestedOneWithoutTicketsInputObjectSchema } from './TicketGroupCreateNestedOneWithoutTicketsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TicketCreateInput> = z
  .object({
    section: z.string(),
    row: z.string(),
    seat: z.string(),
    Event: z
      .lazy(() => EventCreateNestedOneWithoutTicketsInputObjectSchema)
      .optional(),
    TicketGroup: z
      .lazy(() => TicketGroupCreateNestedOneWithoutTicketsInputObjectSchema)
      .optional(),
  })
  .strict();

export const TicketCreateInputObjectSchema = Schema;
