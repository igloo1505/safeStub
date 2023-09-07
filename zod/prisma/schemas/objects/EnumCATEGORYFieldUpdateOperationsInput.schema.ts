import { z } from 'zod';
import { CATEGORYSchema } from '../enums/CATEGORY.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.EnumCATEGORYFieldUpdateOperationsInput> = z
  .object({
    set: z.lazy(() => CATEGORYSchema).optional(),
  })
  .strict();

export const EnumCATEGORYFieldUpdateOperationsInputObjectSchema = Schema;
