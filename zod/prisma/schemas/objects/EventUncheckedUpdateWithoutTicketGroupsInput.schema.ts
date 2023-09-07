import { z } from 'zod';
import { IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema';
import { CATEGORYSchema } from '../enums/CATEGORY.schema';
import { EnumCATEGORYFieldUpdateOperationsInputObjectSchema } from './EnumCATEGORYFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { TicketUncheckedUpdateManyWithoutEventNestedInputObjectSchema } from './TicketUncheckedUpdateManyWithoutEventNestedInput.schema';
import { TagUncheckedUpdateManyWithoutEventNestedInputObjectSchema } from './TagUncheckedUpdateManyWithoutEventNestedInput.schema';
import { TeamUncheckedUpdateManyWithoutEventNestedInputObjectSchema } from './TeamUncheckedUpdateManyWithoutEventNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.EventUncheckedUpdateWithoutTicketGroupsInput> = z
  .object({
    id: z
      .union([
        z.number(),
        z.lazy(() => IntFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    category: z
      .union([
        z.lazy(() => CATEGORYSchema),
        z.lazy(() => EnumCATEGORYFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    arenaId: z
      .union([
        z.number(),
        z.lazy(() => IntFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    amenitiesId: z
      .union([
        z.number(),
        z.lazy(() => IntFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    date: z
      .union([
        z.coerce.date(),
        z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    title: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    description: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    tickets: z
      .lazy(() => TicketUncheckedUpdateManyWithoutEventNestedInputObjectSchema)
      .optional(),
    tags: z
      .lazy(() => TagUncheckedUpdateManyWithoutEventNestedInputObjectSchema)
      .optional(),
    participants: z
      .lazy(() => TeamUncheckedUpdateManyWithoutEventNestedInputObjectSchema)
      .optional(),
  })
  .strict();

export const EventUncheckedUpdateWithoutTicketGroupsInputObjectSchema = Schema;
