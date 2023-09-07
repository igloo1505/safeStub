import { z } from 'zod';
import { LeaguesSchema } from '../enums/Leagues.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.EnumLeaguesFieldUpdateOperationsInput> = z
  .object({
    set: z.lazy(() => LeaguesSchema).optional(),
  })
  .strict();

export const EnumLeaguesFieldUpdateOperationsInputObjectSchema = Schema;
