import { z } from 'zod';
import { ColorsArgsObjectSchema } from './ColorsArgs.schema';
import { ArenaArgsObjectSchema } from './ArenaArgs.schema';
import { EventFindManySchema } from '../findManyEvent.schema';
import { LogoFindManySchema } from '../findManyLogo.schema';
import { TeamCountOutputTypeArgsObjectSchema } from './TeamCountOutputTypeArgs.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TeamSelect> = z
  .object({
    id: z.boolean().optional(),
    uniqueKey: z.boolean().optional(),
    name: z.boolean().optional(),
    abbreviation: z.boolean().optional(),
    displayName: z.boolean().optional(),
    displayName_short: z.boolean().optional(),
    nickname: z.boolean().optional(),
    league: z.boolean().optional(),
    sport: z.boolean().optional(),
    conference: z.boolean().optional(),
    division: z.boolean().optional(),
    colors: z
      .union([z.boolean(), z.lazy(() => ColorsArgsObjectSchema)])
      .optional(),
    homeArena: z
      .union([z.boolean(), z.lazy(() => ArenaArgsObjectSchema)])
      .optional(),
    homeArenaId: z.boolean().optional(),
    Event: z.union([z.boolean(), z.lazy(() => EventFindManySchema)]).optional(),
    colorsId: z.boolean().optional(),
    logos: z.union([z.boolean(), z.lazy(() => LogoFindManySchema)]).optional(),
    _count: z
      .union([z.boolean(), z.lazy(() => TeamCountOutputTypeArgsObjectSchema)])
      .optional(),
  })
  .strict();

export const TeamSelectObjectSchema = Schema;
