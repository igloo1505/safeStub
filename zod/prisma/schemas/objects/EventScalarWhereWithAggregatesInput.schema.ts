import { z } from 'zod';
import { IntWithAggregatesFilterObjectSchema } from './IntWithAggregatesFilter.schema';
import { EnumCATEGORYWithAggregatesFilterObjectSchema } from './EnumCATEGORYWithAggregatesFilter.schema';
import { CATEGORYSchema } from '../enums/CATEGORY.schema';
import { DateTimeWithAggregatesFilterObjectSchema } from './DateTimeWithAggregatesFilter.schema';
import { StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.EventScalarWhereWithAggregatesInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => EventScalarWhereWithAggregatesInputObjectSchema),
        z.lazy(() => EventScalarWhereWithAggregatesInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => EventScalarWhereWithAggregatesInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => EventScalarWhereWithAggregatesInputObjectSchema),
        z.lazy(() => EventScalarWhereWithAggregatesInputObjectSchema).array(),
      ])
      .optional(),
    id: z
      .union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number()])
      .optional(),
    category: z
      .union([
        z.lazy(() => EnumCATEGORYWithAggregatesFilterObjectSchema),
        z.lazy(() => CATEGORYSchema),
      ])
      .optional(),
    arenaId: z
      .union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number()])
      .optional(),
    amenitiesId: z
      .union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number()])
      .optional(),
    date: z
      .union([
        z.lazy(() => DateTimeWithAggregatesFilterObjectSchema),
        z.coerce.date(),
      ])
      .optional(),
    title: z
      .union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()])
      .optional(),
    description: z
      .union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()])
      .optional(),
  })
  .strict();

export const EventScalarWhereWithAggregatesInputObjectSchema = Schema;
