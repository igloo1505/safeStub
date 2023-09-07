import { z } from 'zod';
import { IntFilterObjectSchema } from './IntFilter.schema';
import { UserRelationFilterObjectSchema } from './UserRelationFilter.schema';
import { UserWhereInputObjectSchema } from './UserWhereInput.schema';
import { LegalNameRelationFilterObjectSchema } from './LegalNameRelationFilter.schema';
import { LegalNameWhereInputObjectSchema } from './LegalNameWhereInput.schema';
import { LocationRelationFilterObjectSchema } from './LocationRelationFilter.schema';
import { LocationWhereInputObjectSchema } from './LocationWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PersonalDetailsWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => PersonalDetailsWhereInputObjectSchema),
        z.lazy(() => PersonalDetailsWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => PersonalDetailsWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => PersonalDetailsWhereInputObjectSchema),
        z.lazy(() => PersonalDetailsWhereInputObjectSchema).array(),
      ])
      .optional(),
    id: z.union([z.lazy(() => IntFilterObjectSchema), z.number()]).optional(),
    userId: z
      .union([z.lazy(() => IntFilterObjectSchema), z.number()])
      .optional(),
    user: z
      .union([
        z.lazy(() => UserRelationFilterObjectSchema),
        z.lazy(() => UserWhereInputObjectSchema),
      ])
      .optional(),
    name: z
      .union([
        z.lazy(() => LegalNameRelationFilterObjectSchema),
        z.lazy(() => LegalNameWhereInputObjectSchema),
      ])
      .optional()
      .nullable(),
    location: z
      .union([
        z.lazy(() => LocationRelationFilterObjectSchema),
        z.lazy(() => LocationWhereInputObjectSchema),
      ])
      .optional()
      .nullable(),
  })
  .strict();

export const PersonalDetailsWhereInputObjectSchema = Schema;
