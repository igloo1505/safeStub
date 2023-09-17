import { z } from 'zod';
import { EventCreateNestedOneWithoutTicketGroupsInputObjectSchema } from './EventCreateNestedOneWithoutTicketGroupsInput.schema';
import { TicketCreateNestedManyWithoutTicketGroupInputObjectSchema } from './TicketCreateNestedManyWithoutTicketGroupInput.schema';
import { ArenaSectionCreateNestedOneWithoutTicketGroupInputObjectSchema } from './ArenaSectionCreateNestedOneWithoutTicketGroupInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TicketGroupCreateInput> = z
  .object({
    Event: z
      .lazy(() => EventCreateNestedOneWithoutTicketGroupsInputObjectSchema)
      .optional(),
    tickets: z
      .lazy(() => TicketCreateNestedManyWithoutTicketGroupInputObjectSchema)
      .optional(),
    arenaSection: z.lazy(
      () => ArenaSectionCreateNestedOneWithoutTicketGroupInputObjectSchema,
    ),
  })
  .strict();

export const TicketGroupCreateInputObjectSchema = Schema;
