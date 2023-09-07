import { z } from 'zod';
import { ColorsArgsObjectSchema } from './ColorsArgs.schema';
import { ArenaArgsObjectSchema } from './ArenaArgs.schema';
import { EventArgsObjectSchema } from './EventArgs.schema';
import { LogoFindManySchema } from '../findManyLogo.schema';
import { TeamCountOutputTypeArgsObjectSchema } from './TeamCountOutputTypeArgs.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TeamInclude> = z
  .object({
    colors: z
      .union([z.boolean(), z.lazy(() => ColorsArgsObjectSchema)])
      .optional(),
    homeArena: z
      .union([z.boolean(), z.lazy(() => ArenaArgsObjectSchema)])
      .optional(),
    Event: z
      .union([z.boolean(), z.lazy(() => EventArgsObjectSchema)])
      .optional(),
    logos: z.union([z.boolean(), z.lazy(() => LogoFindManySchema)]).optional(),
    _count: z
      .union([z.boolean(), z.lazy(() => TeamCountOutputTypeArgsObjectSchema)])
      .optional(),
  })
  .strict();

export const TeamIncludeObjectSchema = Schema;
