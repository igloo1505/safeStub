import { z } from 'zod';
import { EventCreateNestedOneWithoutTicketGroupsInputObjectSchema } from './EventCreateNestedOneWithoutTicketGroupsInput.schema';
import { TicketCreateNestedManyWithoutTicketGroupInputObjectSchema } from './TicketCreateNestedManyWithoutTicketGroupInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TicketGroupCreateInput> = z
  .object({
    seatedTogether: z.boolean(),
    Event: z
      .lazy(() => EventCreateNestedOneWithoutTicketGroupsInputObjectSchema)
      .optional(),
    tickets: z
      .lazy(() => TicketCreateNestedManyWithoutTicketGroupInputObjectSchema)
      .optional(),
  })
  .strict();

export const TicketGroupCreateInputObjectSchema = Schema;
