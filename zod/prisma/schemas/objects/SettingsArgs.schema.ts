import { z } from 'zod';
import { SettingsSelectObjectSchema } from './SettingsSelect.schema';
import { SettingsIncludeObjectSchema } from './SettingsInclude.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SettingsArgs> = z
  .object({
    select: z.lazy(() => SettingsSelectObjectSchema).optional(),
    include: z.lazy(() => SettingsIncludeObjectSchema).optional(),
  })
  .strict();

export const SettingsArgsObjectSchema = Schema;
