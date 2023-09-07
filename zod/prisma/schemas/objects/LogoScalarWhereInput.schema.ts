import { z } from 'zod';
import { IntFilterObjectSchema } from './IntFilter.schema';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { StringNullableListFilterObjectSchema } from './StringNullableListFilter.schema';
import { StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { IntNullableFilterObjectSchema } from './IntNullableFilter.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.LogoScalarWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => LogoScalarWhereInputObjectSchema),
        z.lazy(() => LogoScalarWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => LogoScalarWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => LogoScalarWhereInputObjectSchema),
        z.lazy(() => LogoScalarWhereInputObjectSchema).array(),
      ])
      .optional(),
    id: z.union([z.lazy(() => IntFilterObjectSchema), z.number()]).optional(),
    path: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    width: z
      .union([z.lazy(() => IntFilterObjectSchema), z.number()])
      .optional(),
    height: z
      .union([z.lazy(() => IntFilterObjectSchema), z.number()])
      .optional(),
    rel: z.lazy(() => StringNullableListFilterObjectSchema).optional(),
    url: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    teamId: z
      .union([z.lazy(() => IntNullableFilterObjectSchema), z.number()])
      .optional()
      .nullable(),
  })
  .strict();

export const LogoScalarWhereInputObjectSchema = Schema;
