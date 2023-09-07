import { z } from 'zod';
import { NFL_DivisionSchema } from '../enums/NFL_Division.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.NullableEnumNFL_DivisionFieldUpdateOperationsInput> =
  z
    .object({
      set: z
        .lazy(() => NFL_DivisionSchema)
        .optional()
        .nullable(),
    })
    .strict();

export const NullableEnumNFL_DivisionFieldUpdateOperationsInputObjectSchema =
  Schema;
