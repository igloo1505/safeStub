import { z } from 'zod';
import { TeamArgsObjectSchema } from './TeamArgs.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.LogoInclude> = z
  .object({
    Team: z.union([z.boolean(), z.lazy(() => TeamArgsObjectSchema)]).optional(),
  })
  .strict();

export const LogoIncludeObjectSchema = Schema;
