import { z } from 'zod';
import { IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema';
import { BoolFieldUpdateOperationsInputObjectSchema } from './BoolFieldUpdateOperationsInput.schema';
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
    seatedTogether: z
      .union([
        z.boolean(),
        z.lazy(() => BoolFieldUpdateOperationsInputObjectSchema),
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
