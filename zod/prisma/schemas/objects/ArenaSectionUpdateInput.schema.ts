import { z } from 'zod';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema';
import { ArenaUpdateOneRequiredWithoutSectionsNestedInputObjectSchema } from './ArenaUpdateOneRequiredWithoutSectionsNestedInput.schema';
import { TicketUpdateManyWithoutArenaSectionNestedInputObjectSchema } from './TicketUpdateManyWithoutArenaSectionNestedInput.schema';
import { TicketGroupUpdateManyWithoutArenaSectionNestedInputObjectSchema } from './TicketGroupUpdateManyWithoutArenaSectionNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ArenaSectionUpdateInput> = z
  .object({
    name: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
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
    Arena: z
      .lazy(() => ArenaUpdateOneRequiredWithoutSectionsNestedInputObjectSchema)
      .optional(),
    Ticket: z
      .lazy(() => TicketUpdateManyWithoutArenaSectionNestedInputObjectSchema)
      .optional(),
    TicketGroup: z
      .lazy(
        () => TicketGroupUpdateManyWithoutArenaSectionNestedInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const ArenaSectionUpdateInputObjectSchema = Schema;
