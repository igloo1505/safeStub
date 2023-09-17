import { z } from 'zod';
import { IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { TicketUncheckedUpdateManyWithoutArenaSectionNestedInputObjectSchema } from './TicketUncheckedUpdateManyWithoutArenaSectionNestedInput.schema';
import { TicketGroupUncheckedUpdateManyWithoutArenaSectionNestedInputObjectSchema } from './TicketGroupUncheckedUpdateManyWithoutArenaSectionNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ArenaSectionUncheckedUpdateInput> = z
  .object({
    id: z
      .union([
        z.number(),
        z.lazy(() => IntFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    name: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    arenaId: z
      .union([
        z.number(),
        z.lazy(() => IntFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    section: z
      .union([
        z.number(),
        z.lazy(() => IntFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    row: z
      .union([
        z.number(),
        z.lazy(() => IntFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    Ticket: z
      .lazy(
        () =>
          TicketUncheckedUpdateManyWithoutArenaSectionNestedInputObjectSchema,
      )
      .optional(),
    TicketGroup: z
      .lazy(
        () =>
          TicketGroupUncheckedUpdateManyWithoutArenaSectionNestedInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const ArenaSectionUncheckedUpdateInputObjectSchema = Schema;
