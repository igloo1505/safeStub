import { z } from 'zod';
import { SportsSchema } from '../enums/Sports.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.EnumSportsFieldUpdateOperationsInput> = z
  .object({
    set: z.lazy(() => SportsSchema).optional(),
  })
  .strict();

export const EnumSportsFieldUpdateOperationsInputObjectSchema = Schema;
