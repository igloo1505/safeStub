import { z } from 'zod';
import { IntFilterObjectSchema } from './IntFilter.schema';
import { StringFilterObjectSchema } from './StringFilter.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ArenaSectionScalarWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => ArenaSectionScalarWhereInputObjectSchema),
        z.lazy(() => ArenaSectionScalarWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => ArenaSectionScalarWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => ArenaSectionScalarWhereInputObjectSchema),
        z.lazy(() => ArenaSectionScalarWhereInputObjectSchema).array(),
      ])
      .optional(),
    id: z.union([z.lazy(() => IntFilterObjectSchema), z.number()]).optional(),
    name: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    arenaId: z
      .union([z.lazy(() => IntFilterObjectSchema), z.number()])
      .optional(),
    section: z
      .union([z.lazy(() => IntFilterObjectSchema), z.number()])
      .optional(),
    row: z.union([z.lazy(() => IntFilterObjectSchema), z.number()]).optional(),
  })
  .strict();

export const ArenaSectionScalarWhereInputObjectSchema = Schema;
