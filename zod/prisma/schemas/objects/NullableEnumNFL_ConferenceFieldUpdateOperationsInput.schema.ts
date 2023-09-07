import { z } from 'zod';
import { NFL_ConferenceSchema } from '../enums/NFL_Conference.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.NullableEnumNFL_ConferenceFieldUpdateOperationsInput> =
  z
    .object({
      set: z
        .lazy(() => NFL_ConferenceSchema)
        .optional()
        .nullable(),
    })
    .strict();

export const NullableEnumNFL_ConferenceFieldUpdateOperationsInputObjectSchema =
  Schema;
