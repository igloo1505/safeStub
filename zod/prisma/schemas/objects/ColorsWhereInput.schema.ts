import { z } from 'zod';
import { IntFilterObjectSchema } from './IntFilter.schema';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { TeamListRelationFilterObjectSchema } from './TeamListRelationFilter.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ColorsWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => ColorsWhereInputObjectSchema),
        z.lazy(() => ColorsWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => ColorsWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => ColorsWhereInputObjectSchema),
        z.lazy(() => ColorsWhereInputObjectSchema).array(),
      ])
      .optional(),
    id: z.union([z.lazy(() => IntFilterObjectSchema), z.number()]).optional(),
    primary: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    secondary: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    Team: z.lazy(() => TeamListRelationFilterObjectSchema).optional(),
  })
  .strict();

export const ColorsWhereInputObjectSchema = Schema;
