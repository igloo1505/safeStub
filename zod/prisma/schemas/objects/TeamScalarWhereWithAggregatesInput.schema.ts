import { z } from 'zod';
import { IntWithAggregatesFilterObjectSchema } from './IntWithAggregatesFilter.schema';
import { StringNullableWithAggregatesFilterObjectSchema } from './StringNullableWithAggregatesFilter.schema';
import { EnumNFLTeamNameWithAggregatesFilterObjectSchema } from './EnumNFLTeamNameWithAggregatesFilter.schema';
import { NFLTeamNameSchema } from '../enums/NFLTeamName.schema';
import { EnumLeaguesWithAggregatesFilterObjectSchema } from './EnumLeaguesWithAggregatesFilter.schema';
import { LeaguesSchema } from '../enums/Leagues.schema';
import { EnumSportsWithAggregatesFilterObjectSchema } from './EnumSportsWithAggregatesFilter.schema';
import { SportsSchema } from '../enums/Sports.schema';
import { EnumNFL_ConferenceNullableWithAggregatesFilterObjectSchema } from './EnumNFL_ConferenceNullableWithAggregatesFilter.schema';
import { NFL_ConferenceSchema } from '../enums/NFL_Conference.schema';
import { EnumNFL_DivisionNullableWithAggregatesFilterObjectSchema } from './EnumNFL_DivisionNullableWithAggregatesFilter.schema';
import { NFL_DivisionSchema } from '../enums/NFL_Division.schema';
import { IntNullableWithAggregatesFilterObjectSchema } from './IntNullableWithAggregatesFilter.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TeamScalarWhereWithAggregatesInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => TeamScalarWhereWithAggregatesInputObjectSchema),
        z.lazy(() => TeamScalarWhereWithAggregatesInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => TeamScalarWhereWithAggregatesInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => TeamScalarWhereWithAggregatesInputObjectSchema),
        z.lazy(() => TeamScalarWhereWithAggregatesInputObjectSchema).array(),
      ])
      .optional(),
    id: z
      .union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number()])
      .optional(),
    uniqueKey: z
      .union([
        z.lazy(() => StringNullableWithAggregatesFilterObjectSchema),
        z.string(),
      ])
      .optional()
      .nullable(),
    name: z
      .union([
        z.lazy(() => EnumNFLTeamNameWithAggregatesFilterObjectSchema),
        z.lazy(() => NFLTeamNameSchema),
      ])
      .optional(),
    abbreviation: z
      .union([
        z.lazy(() => StringNullableWithAggregatesFilterObjectSchema),
        z.string(),
      ])
      .optional()
      .nullable(),
    displayName: z
      .union([
        z.lazy(() => StringNullableWithAggregatesFilterObjectSchema),
        z.string(),
      ])
      .optional()
      .nullable(),
    displayName_short: z
      .union([
        z.lazy(() => StringNullableWithAggregatesFilterObjectSchema),
        z.string(),
      ])
      .optional()
      .nullable(),
    nickname: z
      .union([
        z.lazy(() => StringNullableWithAggregatesFilterObjectSchema),
        z.string(),
      ])
      .optional()
      .nullable(),
    league: z
      .union([
        z.lazy(() => EnumLeaguesWithAggregatesFilterObjectSchema),
        z.lazy(() => LeaguesSchema),
      ])
      .optional(),
    sport: z
      .union([
        z.lazy(() => EnumSportsWithAggregatesFilterObjectSchema),
        z.lazy(() => SportsSchema),
      ])
      .optional(),
    conference: z
      .union([
        z.lazy(
          () => EnumNFL_ConferenceNullableWithAggregatesFilterObjectSchema,
        ),
        z.lazy(() => NFL_ConferenceSchema),
      ])
      .optional()
      .nullable(),
    division: z
      .union([
        z.lazy(() => EnumNFL_DivisionNullableWithAggregatesFilterObjectSchema),
        z.lazy(() => NFL_DivisionSchema),
      ])
      .optional()
      .nullable(),
    homeArenaId: z
      .union([
        z.lazy(() => IntNullableWithAggregatesFilterObjectSchema),
        z.number(),
      ])
      .optional()
      .nullable(),
    eventId: z
      .union([
        z.lazy(() => IntNullableWithAggregatesFilterObjectSchema),
        z.number(),
      ])
      .optional()
      .nullable(),
    colorsId: z
      .union([
        z.lazy(() => IntNullableWithAggregatesFilterObjectSchema),
        z.number(),
      ])
      .optional()
      .nullable(),
  })
  .strict();

export const TeamScalarWhereWithAggregatesInputObjectSchema = Schema;
