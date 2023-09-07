import { z } from 'zod';
import { TeamArgsObjectSchema } from './TeamArgs.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.LogoSelect> = z
  .object({
    id: z.boolean().optional(),
    path: z.boolean().optional(),
    width: z.boolean().optional(),
    height: z.boolean().optional(),
    rel: z.boolean().optional(),
    url: z.boolean().optional(),
    Team: z.union([z.boolean(), z.lazy(() => TeamArgsObjectSchema)]).optional(),
    teamId: z.boolean().optional(),
  })
  .strict();

export const LogoSelectObjectSchema = Schema;
