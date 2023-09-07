import { z } from 'zod';
import { FaqCategorySchema } from '../enums/FaqCategory.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.FaqCreateManyInput> = z
  .object({
    id: z.number().optional(),
    title: z.string(),
    subtitle: z.string(),
    body: z.string(),
    category: z.lazy(() => FaqCategorySchema).optional(),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional(),
    priority: z.number().optional(),
  })
  .strict();

export const FaqCreateManyInputObjectSchema = Schema;
