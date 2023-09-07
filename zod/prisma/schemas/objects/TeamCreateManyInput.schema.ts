import { z } from 'zod';
import { NFLTeamNameSchema } from '../enums/NFLTeamName.schema';
import { LeaguesSchema } from '../enums/Leagues.schema';
import { SportsSchema } from '../enums/Sports.schema';
import { NFL_ConferenceSchema } from '../enums/NFL_Conference.schema';
import { NFL_DivisionSchema } from '../enums/NFL_Division.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TeamCreateManyInput> = z
  .object({
    id: z.number().optional(),
    uniqueKey: z.string().optional().nullable(),
    name: z.lazy(() => NFLTeamNameSchema),
    abbreviation: z.string().optional().nullable(),
    displayName: z.string().optional().nullable(),
    displayName_short: z.string().optional().nullable(),
    nickname: z.string().optional().nullable(),
    league: z.lazy(() => LeaguesSchema).optional(),
    sport: z.lazy(() => SportsSchema).optional(),
    conference: z
      .lazy(() => NFL_ConferenceSchema)
      .optional()
      .nullable(),
    division: z
      .lazy(() => NFL_DivisionSchema)
      .optional()
      .nullable(),
    homeArenaId: z.number().optional().nullable(),
    eventId: z.number().optional().nullable(),
    colorsId: z.number().optional().nullable(),
  })
  .strict();

export const TeamCreateManyInputObjectSchema = Schema;
