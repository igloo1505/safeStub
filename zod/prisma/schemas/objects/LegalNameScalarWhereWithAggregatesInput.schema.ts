import { z } from 'zod';
import { StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema';
import { StringNullableWithAggregatesFilterObjectSchema } from './StringNullableWithAggregatesFilter.schema';
import { IntWithAggregatesFilterObjectSchema } from './IntWithAggregatesFilter.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.LegalNameScalarWhereWithAggregatesInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => LegalNameScalarWhereWithAggregatesInputObjectSchema),
        z
          .lazy(() => LegalNameScalarWhereWithAggregatesInputObjectSchema)
          .array(),
      ])
      .optional(),
    OR: z
      .lazy(() => LegalNameScalarWhereWithAggregatesInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => LegalNameScalarWhereWithAggregatesInputObjectSchema),
        z
          .lazy(() => LegalNameScalarWhereWithAggregatesInputObjectSchema)
          .array(),
      ])
      .optional(),
    first: z
      .union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()])
      .optional(),
    middle: z
      .union([
        z.lazy(() => StringNullableWithAggregatesFilterObjectSchema),
        z.string(),
      ])
      .optional()
      .nullable(),
    last: z
      .union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()])
      .optional(),
    detailsId: z
      .union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number()])
      .optional(),
  })
  .strict();

export const LegalNameScalarWhereWithAggregatesInputObjectSchema = Schema;
