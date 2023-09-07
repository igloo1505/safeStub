import { z } from 'zod';
import { FaqCategorySchema } from '../enums/FaqCategory.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.EnumFaqCategoryFieldUpdateOperationsInput> = z
  .object({
    set: z.lazy(() => FaqCategorySchema).optional(),
  })
  .strict();

export const EnumFaqCategoryFieldUpdateOperationsInputObjectSchema = Schema;
