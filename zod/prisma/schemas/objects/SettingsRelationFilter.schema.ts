import { z } from 'zod';
import { SettingsWhereInputObjectSchema } from './SettingsWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SettingsRelationFilter> = z
  .object({
    is: z
      .lazy(() => SettingsWhereInputObjectSchema)
      .optional()
      .nullable(),
    isNot: z
      .lazy(() => SettingsWhereInputObjectSchema)
      .optional()
      .nullable(),
  })
  .strict();

export const SettingsRelationFilterObjectSchema = Schema;
