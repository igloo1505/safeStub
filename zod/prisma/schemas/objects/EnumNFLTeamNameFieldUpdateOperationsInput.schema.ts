import { z } from 'zod';
import { NFLTeamNameSchema } from '../enums/NFLTeamName.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.EnumNFLTeamNameFieldUpdateOperationsInput> = z
  .object({
    set: z.lazy(() => NFLTeamNameSchema).optional(),
  })
  .strict();

export const EnumNFLTeamNameFieldUpdateOperationsInputObjectSchema = Schema;
