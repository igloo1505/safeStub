import { z } from 'zod';
import { IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema';
import { NullableIntFieldUpdateOperationsInputObjectSchema } from './NullableIntFieldUpdateOperationsInput.schema';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TicketGroupUncheckedUpdateManyInput> = z
  .object({
    id: z
      .union([
        z.number(),
        z.lazy(() => IntFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    eventId: z
      .union([
        z.number(),
        z.lazy(() => NullableIntFieldUpdateOperationsInputObjectSchema),
      ])
      .optional()
      .nullable(),
    confirmationId: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
  })
  .strict();

export const TicketGroupUncheckedUpdateManyInputObjectSchema = Schema;
