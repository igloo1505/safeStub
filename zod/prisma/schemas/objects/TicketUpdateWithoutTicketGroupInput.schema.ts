import { z } from 'zod';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { TicketStatusSchema } from '../enums/TicketStatus.schema';
import { EnumTicketStatusFieldUpdateOperationsInputObjectSchema } from './EnumTicketStatusFieldUpdateOperationsInput.schema';
import { EventUpdateOneWithoutTicketsNestedInputObjectSchema } from './EventUpdateOneWithoutTicketsNestedInput.schema';
import { UserUpdateOneRequiredWithoutTicketsSoldNestedInputObjectSchema } from './UserUpdateOneRequiredWithoutTicketsSoldNestedInput.schema';
import { UserUpdateOneWithoutTicketsPurchasedNestedInputObjectSchema } from './UserUpdateOneWithoutTicketsPurchasedNestedInput.schema';
import { TransactionUpdateOneWithoutTicketsNestedInputObjectSchema } from './TransactionUpdateOneWithoutTicketsNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TicketUpdateWithoutTicketGroupInput> = z
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
    ticketNumber: z
      .union([
        z.string(),
        z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional()
      .nullable(),
    status: z
      .union([
        z.lazy(() => TicketStatusSchema),
        z.lazy(() => EnumTicketStatusFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    Event: z
      .lazy(() => EventUpdateOneWithoutTicketsNestedInputObjectSchema)
      .optional(),
    seller: z
      .lazy(
        () => UserUpdateOneRequiredWithoutTicketsSoldNestedInputObjectSchema,
      )
      .optional(),
    buyer: z
      .lazy(() => UserUpdateOneWithoutTicketsPurchasedNestedInputObjectSchema)
      .optional(),
    transaction: z
      .lazy(() => TransactionUpdateOneWithoutTicketsNestedInputObjectSchema)
      .optional(),
  })
  .strict();

export const TicketUpdateWithoutTicketGroupInputObjectSchema = Schema;
