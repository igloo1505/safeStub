import { z } from 'zod';
import { BoolFieldUpdateOperationsInputObjectSchema } from './BoolFieldUpdateOperationsInput.schema';
import { EventUpdateOneWithoutTicketGroupsNestedInputObjectSchema } from './EventUpdateOneWithoutTicketGroupsNestedInput.schema';
import { TicketUpdateManyWithoutTicketGroupNestedInputObjectSchema } from './TicketUpdateManyWithoutTicketGroupNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TicketGroupUpdateInput> = z
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
    tickets: z
      .lazy(() => TicketUpdateManyWithoutTicketGroupNestedInputObjectSchema)
      .optional(),
  })
  .strict();

export const TicketGroupUpdateInputObjectSchema = Schema;
