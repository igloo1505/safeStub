import { z } from 'zod';
import { IntFilterObjectSchema } from './IntFilter.schema';
import { StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { IntNullableFilterObjectSchema } from './IntNullableFilter.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ArenaScalarWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => ArenaScalarWhereInputObjectSchema),
        z.lazy(() => ArenaScalarWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => ArenaScalarWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => ArenaScalarWhereInputObjectSchema),
        z.lazy(() => ArenaScalarWhereInputObjectSchema).array(),
      ])
      .optional(),
    id: z.union([z.lazy(() => IntFilterObjectSchema), z.number()]).optional(),
    uniqueKey: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    name: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    arenaAmenitiesId: z
      .union([z.lazy(() => IntFilterObjectSchema), z.number()])
      .optional(),
    locationId: z
      .union([z.lazy(() => IntFilterObjectSchema), z.number()])
      .optional(),
    sectionImageId: z
      .union([z.lazy(() => IntNullableFilterObjectSchema), z.number()])
      .optional()
      .nullable(),
  })
  .strict();

export const ArenaScalarWhereInputObjectSchema = Schema;
