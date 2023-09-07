import { z } from 'zod';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { IntFilterObjectSchema } from './IntFilter.schema';
import { PersonalDetailsRelationFilterObjectSchema } from './PersonalDetailsRelationFilter.schema';
import { PersonalDetailsWhereInputObjectSchema } from './PersonalDetailsWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.LegalNameWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => LegalNameWhereInputObjectSchema),
        z.lazy(() => LegalNameWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => LegalNameWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => LegalNameWhereInputObjectSchema),
        z.lazy(() => LegalNameWhereInputObjectSchema).array(),
      ])
      .optional(),
    first: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    middle: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    last: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    detailsId: z
      .union([z.lazy(() => IntFilterObjectSchema), z.number()])
      .optional(),
    personalDetails: z
      .union([
        z.lazy(() => PersonalDetailsRelationFilterObjectSchema),
        z.lazy(() => PersonalDetailsWhereInputObjectSchema),
      ])
      .optional(),
  })
  .strict();

export const LegalNameWhereInputObjectSchema = Schema;
