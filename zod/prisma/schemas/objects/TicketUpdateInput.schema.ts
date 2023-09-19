import { z } from 'zod';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { EventUpdateOneWithoutTicketsNestedInputObjectSchema } from './EventUpdateOneWithoutTicketsNestedInput.schema';
import { TicketGroupUpdateOneWithoutTicketsNestedInputObjectSchema } from './TicketGroupUpdateOneWithoutTicketsNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TicketUpdateInput> = z
  .object({
    section: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    row: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    seat: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    Event: z
      .lazy(() => EventUpdateOneWithoutTicketsNestedInputObjectSchema)
      .optional(),
    TicketGroup: z
      .lazy(() => TicketGroupUpdateOneWithoutTicketsNestedInputObjectSchema)
      .optional(),
  })
  .strict();

export const TicketUpdateInputObjectSchema = Schema;
