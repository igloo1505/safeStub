import { z } from 'zod';
import { UserArgsObjectSchema } from './UserArgs.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SettingsSelect> = z
  .object({
    id: z.boolean().optional(),
    darkmode: z.boolean().optional(),
    user: z.union([z.boolean(), z.lazy(() => UserArgsObjectSchema)]).optional(),
    userId: z.boolean().optional(),
  })
  .strict();

export const SettingsSelectObjectSchema = Schema;
