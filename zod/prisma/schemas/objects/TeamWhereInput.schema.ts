import { z } from 'zod';
import { IntFilterObjectSchema } from './IntFilter.schema';
import { StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { EnumNFLTeamNameFilterObjectSchema } from './EnumNFLTeamNameFilter.schema';
import { NFLTeamNameSchema } from '../enums/NFLTeamName.schema';
import { EnumLeaguesFilterObjectSchema } from './EnumLeaguesFilter.schema';
import { LeaguesSchema } from '../enums/Leagues.schema';
import { EnumSportsFilterObjectSchema } from './EnumSportsFilter.schema';
import { SportsSchema } from '../enums/Sports.schema';
import { EnumNFL_ConferenceNullableFilterObjectSchema } from './EnumNFL_ConferenceNullableFilter.schema';
import { NFL_ConferenceSchema } from '../enums/NFL_Conference.schema';
import { EnumNFL_DivisionNullableFilterObjectSchema } from './EnumNFL_DivisionNullableFilter.schema';
import { NFL_DivisionSchema } from '../enums/NFL_Division.schema';
import { IntNullableFilterObjectSchema } from './IntNullableFilter.schema';
import { ColorsRelationFilterObjectSchema } from './ColorsRelationFilter.schema';
import { ColorsWhereInputObjectSchema } from './ColorsWhereInput.schema';
import { ArenaRelationFilterObjectSchema } from './ArenaRelationFilter.schema';
import { ArenaWhereInputObjectSchema } from './ArenaWhereInput.schema';
import { EventRelationFilterObjectSchema } from './EventRelationFilter.schema';
import { EventWhereInputObjectSchema } from './EventWhereInput.schema';
import { LogoListRelationFilterObjectSchema } from './LogoListRelationFilter.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TeamWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => TeamWhereInputObjectSchema),
        z.lazy(() => TeamWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => TeamWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => TeamWhereInputObjectSchema),
        z.lazy(() => TeamWhereInputObjectSchema).array(),
      ])
      .optional(),
    id: z.union([z.lazy(() => IntFilterObjectSchema), z.number()]).optional(),
    uniqueKey: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    name: z
      .union([
        z.lazy(() => EnumNFLTeamNameFilterObjectSchema),
        z.lazy(() => NFLTeamNameSchema),
      ])
      .optional(),
    abbreviation: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    displayName: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    displayName_short: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    nickname: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    league: z
      .union([
        z.lazy(() => EnumLeaguesFilterObjectSchema),
        z.lazy(() => LeaguesSchema),
      ])
      .optional(),
    sport: z
      .union([
        z.lazy(() => EnumSportsFilterObjectSchema),
        z.lazy(() => SportsSchema),
      ])
      .optional(),
    conference: z
      .union([
        z.lazy(() => EnumNFL_ConferenceNullableFilterObjectSchema),
        z.lazy(() => NFL_ConferenceSchema),
      ])
      .optional()
      .nullable(),
    division: z
      .union([
        z.lazy(() => EnumNFL_DivisionNullableFilterObjectSchema),
        z.lazy(() => NFL_DivisionSchema),
      ])
      .optional()
      .nullable(),
    homeArenaId: z
      .union([z.lazy(() => IntNullableFilterObjectSchema), z.number()])
      .optional()
      .nullable(),
    eventId: z
      .union([z.lazy(() => IntNullableFilterObjectSchema), z.number()])
      .optional()
      .nullable(),
    colorsId: z
      .union([z.lazy(() => IntNullableFilterObjectSchema), z.number()])
      .optional()
      .nullable(),
    colors: z
      .union([
        z.lazy(() => ColorsRelationFilterObjectSchema),
        z.lazy(() => ColorsWhereInputObjectSchema),
      ])
      .optional()
      .nullable(),
    homeArena: z
      .union([
        z.lazy(() => ArenaRelationFilterObjectSchema),
        z.lazy(() => ArenaWhereInputObjectSchema),
      ])
      .optional()
      .nullable(),
    Event: z
      .union([
        z.lazy(() => EventRelationFilterObjectSchema),
        z.lazy(() => EventWhereInputObjectSchema),
      ])
      .optional()
      .nullable(),
    logos: z.lazy(() => LogoListRelationFilterObjectSchema).optional(),
  })
  .strict();

export const TeamWhereInputObjectSchema = Schema;
