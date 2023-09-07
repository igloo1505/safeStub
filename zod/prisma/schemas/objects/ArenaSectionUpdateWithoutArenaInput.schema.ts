import { z } from 'zod';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { TicketUpdateManyWithoutArenaSectionNestedInputObjectSchema } from './TicketUpdateManyWithoutArenaSectionNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ArenaSectionUpdateWithoutArenaInput> = z
  .object({
    name: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    Ticket: z
      .lazy(() => TicketUpdateManyWithoutArenaSectionNestedInputObjectSchema)
      .optional(),
  })
  .strict();

export const ArenaSectionUpdateWithoutArenaInputObjectSchema = Schema;
