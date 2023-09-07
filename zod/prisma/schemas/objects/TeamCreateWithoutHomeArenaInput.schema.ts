import { z } from 'zod';
import { NFLTeamNameSchema } from '../enums/NFLTeamName.schema';
import { LeaguesSchema } from '../enums/Leagues.schema';
import { SportsSchema } from '../enums/Sports.schema';
import { NFL_ConferenceSchema } from '../enums/NFL_Conference.schema';
import { NFL_DivisionSchema } from '../enums/NFL_Division.schema';
import { ColorsCreateNestedOneWithoutTeamInputObjectSchema } from './ColorsCreateNestedOneWithoutTeamInput.schema';
import { EventCreateNestedOneWithoutParticipantsInputObjectSchema } from './EventCreateNestedOneWithoutParticipantsInput.schema';
import { LogoCreateNestedManyWithoutTeamInputObjectSchema } from './LogoCreateNestedManyWithoutTeamInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TeamCreateWithoutHomeArenaInput> = z
  .object({
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
    colors: z
      .lazy(() => ColorsCreateNestedOneWithoutTeamInputObjectSchema)
      .optional(),
    Event: z
      .lazy(() => EventCreateNestedOneWithoutParticipantsInputObjectSchema)
      .optional(),
    logos: z
      .lazy(() => LogoCreateNestedManyWithoutTeamInputObjectSchema)
      .optional(),
  })
  .strict();

export const TeamCreateWithoutHomeArenaInputObjectSchema = Schema;
