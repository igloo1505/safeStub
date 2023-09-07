import { z } from 'zod';
import { BoolFieldUpdateOperationsInputObjectSchema } from './BoolFieldUpdateOperationsInput.schema';
import { EventUpdateOneWithoutTicketGroupsNestedInputObjectSchema } from './EventUpdateOneWithoutTicketGroupsNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TicketGroupUpdateWithoutTicketsInput> = z
  .object({
    seatedTogether: z
      .union([
        z.boolean(),
        z.lazy(() => BoolFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    Event: z
      .lazy(() => EventUpdateOneWithoutTicketGroupsNestedInputObjectSchema)
      .optional(),
  })
  .strict();

export const TicketGroupUpdateWithoutTicketsInputObjectSchema = Schema;
