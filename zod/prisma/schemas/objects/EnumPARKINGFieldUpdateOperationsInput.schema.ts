import { z } from 'zod';
import { PARKINGSchema } from '../enums/PARKING.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.EnumPARKINGFieldUpdateOperationsInput> = z
  .object({
    set: z.lazy(() => PARKINGSchema).optional(),
  })
  .strict();

export const EnumPARKINGFieldUpdateOperationsInputObjectSchema = Schema;
