import { z } from 'zod';
import { TeamFindManySchema } from '../findManyTeam.schema';
import { ColorsCountOutputTypeArgsObjectSchema } from './ColorsCountOutputTypeArgs.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ColorsSelect> = z
  .object({
    id: z.boolean().optional(),
    primary: z.boolean().optional(),
    secondary: z.boolean().optional(),
    Team: z.union([z.boolean(), z.lazy(() => TeamFindManySchema)]).optional(),
    _count: z
      .union([z.boolean(), z.lazy(() => ColorsCountOutputTypeArgsObjectSchema)])
      .optional(),
  })
  .strict();

export const ColorsSelectObjectSchema = Schema;
