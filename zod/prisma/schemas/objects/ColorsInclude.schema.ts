import { z } from 'zod';
import { TeamFindManySchema } from '../findManyTeam.schema';
import { ColorsCountOutputTypeArgsObjectSchema } from './ColorsCountOutputTypeArgs.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ColorsInclude> = z
  .object({
    Team: z.union([z.boolean(), z.lazy(() => TeamFindManySchema)]).optional(),
    _count: z
      .union([z.boolean(), z.lazy(() => ColorsCountOutputTypeArgsObjectSchema)])
      .optional(),
  })
  .strict();

export const ColorsIncludeObjectSchema = Schema;
