import { z } from 'zod';
import { AMENITIYSchema } from '../enums/AMENITIY.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.EnumAMENITIYFieldUpdateOperationsInput> = z
  .object({
    set: z.lazy(() => AMENITIYSchema).optional(),
  })
  .strict();

export const EnumAMENITIYFieldUpdateOperationsInputObjectSchema = Schema;
