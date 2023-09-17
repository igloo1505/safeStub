import { z } from 'zod';
import { EventCreateNestedOneWithoutTicketGroupsInputObjectSchema } from './EventCreateNestedOneWithoutTicketGroupsInput.schema';
import { ArenaSectionCreateNestedOneWithoutTicketGroupInputObjectSchema } from './ArenaSectionCreateNestedOneWithoutTicketGroupInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TicketGroupCreateWithoutTicketsInput> = z
  .object({
    Event: z
      .lazy(() => EventCreateNestedOneWithoutTicketGroupsInputObjectSchema)
      .optional(),
    arenaSection: z.lazy(
      () => ArenaSectionCreateNestedOneWithoutTicketGroupInputObjectSchema,
    ),
  })
  .strict();

export const TicketGroupCreateWithoutTicketsInputObjectSchema = Schema;
