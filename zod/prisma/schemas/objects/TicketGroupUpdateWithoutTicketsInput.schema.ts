import { z } from 'zod';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { EventUpdateOneWithoutTicketGroupsNestedInputObjectSchema } from './EventUpdateOneWithoutTicketGroupsNestedInput.schema';
import { UserUpdateOneRequiredWithoutTicketGroupsSoldNestedInputObjectSchema } from './UserUpdateOneRequiredWithoutTicketGroupsSoldNestedInput.schema';
import { UserUpdateOneWithoutTicketGroupsPurchasedNestedInputObjectSchema } from './UserUpdateOneWithoutTicketGroupsPurchasedNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TicketGroupUpdateWithoutTicketsInput> = z
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
    seller: z
      .lazy(
        () =>
          UserUpdateOneRequiredWithoutTicketGroupsSoldNestedInputObjectSchema,
      )
      .optional(),
    buyer: z
      .lazy(
        () => UserUpdateOneWithoutTicketGroupsPurchasedNestedInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const TicketGroupUpdateWithoutTicketsInputObjectSchema = Schema;
