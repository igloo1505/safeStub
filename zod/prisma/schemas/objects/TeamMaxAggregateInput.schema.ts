import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TeamMaxAggregateInputType> = z
  .object({
    id: z.literal(true).optional(),
    uniqueKey: z.literal(true).optional(),
    name: z.literal(true).optional(),
    abbreviation: z.literal(true).optional(),
    displayName: z.literal(true).optional(),
    displayName_short: z.literal(true).optional(),
    nickname: z.literal(true).optional(),
    league: z.literal(true).optional(),
    sport: z.literal(true).optional(),
    conference: z.literal(true).optional(),
    division: z.literal(true).optional(),
    homeArenaId: z.literal(true).optional(),
    eventId: z.literal(true).optional(),
    colorsId: z.literal(true).optional(),
  })
  .strict();

export const TeamMaxAggregateInputObjectSchema = Schema;
