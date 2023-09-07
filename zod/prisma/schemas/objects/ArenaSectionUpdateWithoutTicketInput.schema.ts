import { z } from 'zod';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { ArenaUpdateOneRequiredWithoutSectionsNestedInputObjectSchema } from './ArenaUpdateOneRequiredWithoutSectionsNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ArenaSectionUpdateWithoutTicketInput> = z
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
  })
  .strict();

export const ArenaSectionUpdateWithoutTicketInputObjectSchema = Schema;
