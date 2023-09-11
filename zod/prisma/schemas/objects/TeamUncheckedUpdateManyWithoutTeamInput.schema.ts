import { z } from 'zod';
import { IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { NFLTeamNameSchema } from '../enums/NFLTeamName.schema';
import { EnumNFLTeamNameFieldUpdateOperationsInputObjectSchema } from './EnumNFLTeamNameFieldUpdateOperationsInput.schema';
import { LeaguesSchema } from '../enums/Leagues.schema';
import { EnumLeaguesFieldUpdateOperationsInputObjectSchema } from './EnumLeaguesFieldUpdateOperationsInput.schema';
import { SportsSchema } from '../enums/Sports.schema';
import { EnumSportsFieldUpdateOperationsInputObjectSchema } from './EnumSportsFieldUpdateOperationsInput.schema';
import { NFL_ConferenceSchema } from '../enums/NFL_Conference.schema';
import { NullableEnumNFL_ConferenceFieldUpdateOperationsInputObjectSchema } from './NullableEnumNFL_ConferenceFieldUpdateOperationsInput.schema';
import { NFL_DivisionSchema } from '../enums/NFL_Division.schema';
import { NullableEnumNFL_DivisionFieldUpdateOperationsInputObjectSchema } from './NullableEnumNFL_DivisionFieldUpdateOperationsInput.schema';
import { NullableIntFieldUpdateOperationsInputObjectSchema } from './NullableIntFieldUpdateOperationsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TeamUncheckedUpdateManyWithoutTeamInput> = z
  .object({
    id: z
      .union([
        z.number(),
        z.lazy(() => IntFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    uniqueKey: z
      .union([
        z.string(),
        z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional()
      .nullable(),
    name: z
      .union([
        z.lazy(() => NFLTeamNameSchema),
        z.lazy(() => EnumNFLTeamNameFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    abbreviation: z
      .union([
        z.string(),
        z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional()
      .nullable(),
    displayName: z
      .union([
        z.string(),
        z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional()
      .nullable(),
    displayName_short: z
      .union([
        z.string(),
        z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional()
      .nullable(),
    nickname: z
      .union([
        z.string(),
        z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional()
      .nullable(),
    league: z
      .union([
        z.lazy(() => LeaguesSchema),
        z.lazy(() => EnumLeaguesFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    sport: z
      .union([
        z.lazy(() => SportsSchema),
        z.lazy(() => EnumSportsFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    conference: z
      .union([
        z.lazy(() => NFL_ConferenceSchema),
        z.lazy(
          () =>
            NullableEnumNFL_ConferenceFieldUpdateOperationsInputObjectSchema,
        ),
      ])
      .optional()
      .nullable(),
    division: z
      .union([
        z.lazy(() => NFL_DivisionSchema),
        z.lazy(
          () => NullableEnumNFL_DivisionFieldUpdateOperationsInputObjectSchema,
        ),
      ])
      .optional()
      .nullable(),
    homeArenaId: z
      .union([
        z.number(),
        z.lazy(() => NullableIntFieldUpdateOperationsInputObjectSchema),
      ])
      .optional()
      .nullable(),
  })
  .strict();

export const TeamUncheckedUpdateManyWithoutTeamInputObjectSchema = Schema;
