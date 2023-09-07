import { z } from 'zod';
import { IntFilterObjectSchema } from './IntFilter.schema';
import { EnumCATEGORYFilterObjectSchema } from './EnumCATEGORYFilter.schema';
import { CATEGORYSchema } from '../enums/CATEGORY.schema';
import { DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { StringFilterObjectSchema } from './StringFilter.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.EventScalarWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => EventScalarWhereInputObjectSchema),
        z.lazy(() => EventScalarWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => EventScalarWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => EventScalarWhereInputObjectSchema),
        z.lazy(() => EventScalarWhereInputObjectSchema).array(),
      ])
      .optional(),
    id: z.union([z.lazy(() => IntFilterObjectSchema), z.number()]).optional(),
    category: z
      .union([
        z.lazy(() => EnumCATEGORYFilterObjectSchema),
        z.lazy(() => CATEGORYSchema),
      ])
      .optional(),
    arenaId: z
      .union([z.lazy(() => IntFilterObjectSchema), z.number()])
      .optional(),
    amenitiesId: z
      .union([z.lazy(() => IntFilterObjectSchema), z.number()])
      .optional(),
    date: z
      .union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()])
      .optional(),
    title: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    description: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
  })
  .strict();

export const EventScalarWhereInputObjectSchema = Schema;
