import { z } from 'zod';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { TicketUpdateManyWithoutTicketGroupNestedInputObjectSchema } from './TicketUpdateManyWithoutTicketGroupNestedInput.schema';
import { UserUpdateOneRequiredWithoutTicketGroupsSoldNestedInputObjectSchema } from './UserUpdateOneRequiredWithoutTicketGroupsSoldNestedInput.schema';
import { UserUpdateOneWithoutTicketGroupsPurchasedNestedInputObjectSchema } from './UserUpdateOneWithoutTicketGroupsPurchasedNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TicketGroupUpdateWithoutEventInput> = z
  .object({
    confirmationId: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    tickets: z
      .lazy(() => TicketUpdateManyWithoutTicketGroupNestedInputObjectSchema)
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

export const TicketGroupUpdateWithoutEventInputObjectSchema = Schema;
