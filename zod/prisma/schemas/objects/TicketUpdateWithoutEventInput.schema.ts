import { z } from 'zod';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { TicketGroupUpdateOneWithoutTicketsNestedInputObjectSchema } from './TicketGroupUpdateOneWithoutTicketsNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TicketUpdateWithoutEventInput> = z
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
    TicketGroup: z
      .lazy(() => TicketGroupUpdateOneWithoutTicketsNestedInputObjectSchema)
      .optional(),
  })
  .strict();

export const TicketUpdateWithoutEventInputObjectSchema = Schema;
