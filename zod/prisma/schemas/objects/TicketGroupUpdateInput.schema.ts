import { z } from 'zod';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { EventUpdateOneWithoutTicketGroupsNestedInputObjectSchema } from './EventUpdateOneWithoutTicketGroupsNestedInput.schema';
import { TicketUpdateManyWithoutTicketGroupNestedInputObjectSchema } from './TicketUpdateManyWithoutTicketGroupNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TicketGroupUpdateInput> = z
  .object({
    confirmationId: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
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
