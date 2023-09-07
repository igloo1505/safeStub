import { z } from 'zod';
import { BoolFieldUpdateOperationsInputObjectSchema } from './BoolFieldUpdateOperationsInput.schema';
import { TicketUpdateManyWithoutTicketGroupNestedInputObjectSchema } from './TicketUpdateManyWithoutTicketGroupNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TicketGroupUpdateWithoutEventInput> = z
  .object({
    seatedTogether: z
      .union([
        z.boolean(),
        z.lazy(() => BoolFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    tickets: z
      .lazy(() => TicketUpdateManyWithoutTicketGroupNestedInputObjectSchema)
      .optional(),
  })
  .strict();

export const TicketGroupUpdateWithoutEventInputObjectSchema = Schema;
