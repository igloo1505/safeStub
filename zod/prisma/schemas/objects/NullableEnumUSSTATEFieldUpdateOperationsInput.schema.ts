import { z } from 'zod';
import { USSTATESchema } from '../enums/USSTATE.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.NullableEnumUSSTATEFieldUpdateOperationsInput> =
  z
    .object({
      set: z
        .lazy(() => USSTATESchema)
        .optional()
        .nullable(),
    })
    .strict();

export const NullableEnumUSSTATEFieldUpdateOperationsInputObjectSchema = Schema;
