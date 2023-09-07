import { z } from 'zod';
import { IntFilterObjectSchema } from './IntFilter.schema';
import { BoolFilterObjectSchema } from './BoolFilter.schema';
import { UserRelationFilterObjectSchema } from './UserRelationFilter.schema';
import { UserWhereInputObjectSchema } from './UserWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SettingsWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => SettingsWhereInputObjectSchema),
        z.lazy(() => SettingsWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => SettingsWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => SettingsWhereInputObjectSchema),
        z.lazy(() => SettingsWhereInputObjectSchema).array(),
      ])
      .optional(),
    id: z.union([z.lazy(() => IntFilterObjectSchema), z.number()]).optional(),
    darkmode: z
      .union([z.lazy(() => BoolFilterObjectSchema), z.boolean()])
      .optional(),
    userId: z
      .union([z.lazy(() => IntFilterObjectSchema), z.number()])
      .optional(),
    user: z
      .union([
        z.lazy(() => UserRelationFilterObjectSchema),
        z.lazy(() => UserWhereInputObjectSchema),
      ])
      .optional(),
  })
  .strict();

export const SettingsWhereInputObjectSchema = Schema;
