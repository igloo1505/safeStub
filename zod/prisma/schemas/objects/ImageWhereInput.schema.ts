import { z } from 'zod';
import { IntFilterObjectSchema } from './IntFilter.schema';
import { StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { ArenaListRelationFilterObjectSchema } from './ArenaListRelationFilter.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ImageWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => ImageWhereInputObjectSchema),
        z.lazy(() => ImageWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => ImageWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => ImageWhereInputObjectSchema),
        z.lazy(() => ImageWhereInputObjectSchema).array(),
      ])
      .optional(),
    id: z.union([z.lazy(() => IntFilterObjectSchema), z.number()]).optional(),
    publicUrl: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    createdAt: z
      .union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()])
      .optional(),
    updatedAt: z
      .union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()])
      .optional(),
    Arena: z.lazy(() => ArenaListRelationFilterObjectSchema).optional(),
  })
  .strict();

export const ImageWhereInputObjectSchema = Schema;
