import { z } from 'zod';
import { EventCreateNestedOneWithoutTicketsInputObjectSchema } from './EventCreateNestedOneWithoutTicketsInput.schema';
import { ArenaSectionCreateNestedOneWithoutTicketInputObjectSchema } from './ArenaSectionCreateNestedOneWithoutTicketInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TicketCreateWithoutTicketGroupInput> = z
  .object({
    Event: z
      .lazy(() => EventCreateNestedOneWithoutTicketsInputObjectSchema)
      .optional(),
    arenaSection: z.lazy(
      () => ArenaSectionCreateNestedOneWithoutTicketInputObjectSchema,
    ),
  })
  .strict();

export const TicketCreateWithoutTicketGroupInputObjectSchema = Schema;
