import { z } from 'zod';
import { IntFilterObjectSchema } from './IntFilter.schema';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { EnumFaqCategoryFilterObjectSchema } from './EnumFaqCategoryFilter.schema';
import { FaqCategorySchema } from '../enums/FaqCategory.schema';
import { DateTimeFilterObjectSchema } from './DateTimeFilter.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.FaqWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => FaqWhereInputObjectSchema),
        z.lazy(() => FaqWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => FaqWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => FaqWhereInputObjectSchema),
        z.lazy(() => FaqWhereInputObjectSchema).array(),
      ])
      .optional(),
    id: z.union([z.lazy(() => IntFilterObjectSchema), z.number()]).optional(),
    title: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    subtitle: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    body: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    category: z
      .union([
        z.lazy(() => EnumFaqCategoryFilterObjectSchema),
        z.lazy(() => FaqCategorySchema),
      ])
      .optional(),
    createdAt: z
      .union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()])
      .optional(),
    updatedAt: z
      .union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()])
      .optional(),
    priority: z
      .union([z.lazy(() => IntFilterObjectSchema), z.number()])
      .optional(),
  })
  .strict();

export const FaqWhereInputObjectSchema = Schema;
