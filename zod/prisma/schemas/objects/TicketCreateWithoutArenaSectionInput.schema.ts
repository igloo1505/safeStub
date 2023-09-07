import { z } from 'zod';
import { EventCreateNestedOneWithoutTicketsInputObjectSchema } from './EventCreateNestedOneWithoutTicketsInput.schema';
import { TicketGroupCreateNestedOneWithoutTicketsInputObjectSchema } from './TicketGroupCreateNestedOneWithoutTicketsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TicketCreateWithoutArenaSectionInput> = z
  .object({
    Event: z
      .lazy(() => EventCreateNestedOneWithoutTicketsInputObjectSchema)
      .optional(),
    TicketGroup: z
      .lazy(() => TicketGroupCreateNestedOneWithoutTicketsInputObjectSchema)
      .optional(),
  })
  .strict();

export const TicketCreateWithoutArenaSectionInputObjectSchema = Schema;
