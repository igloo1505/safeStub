import { z } from 'zod';
import { IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { TicketUncheckedUpdateManyWithoutTicketGroupNestedInputObjectSchema } from './TicketUncheckedUpdateManyWithoutTicketGroupNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TicketGroupUncheckedUpdateWithoutEventInput> = z
  .object({
    id: z
      .union([
        z.number(),
        z.lazy(() => IntFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    confirmationId: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    tickets: z
      .lazy(
        () =>
          TicketUncheckedUpdateManyWithoutTicketGroupNestedInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const TicketGroupUncheckedUpdateWithoutEventInputObjectSchema = Schema;
