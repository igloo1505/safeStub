import { z } from 'zod';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { ArenaUpdateOneRequiredWithoutSectionsNestedInputObjectSchema } from './ArenaUpdateOneRequiredWithoutSectionsNestedInput.schema';
import { TicketUpdateManyWithoutArenaSectionNestedInputObjectSchema } from './TicketUpdateManyWithoutArenaSectionNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ArenaSectionUpdateInput> = z
  .object({
    name: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    Arena: z
      .lazy(() => ArenaUpdateOneRequiredWithoutSectionsNestedInputObjectSchema)
      .optional(),
    Ticket: z
      .lazy(() => TicketUpdateManyWithoutArenaSectionNestedInputObjectSchema)
      .optional(),
  })
  .strict();

export const ArenaSectionUpdateInputObjectSchema = Schema;
