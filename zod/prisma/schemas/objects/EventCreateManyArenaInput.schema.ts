import { z } from 'zod';
import { CATEGORYSchema } from '../enums/CATEGORY.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.EventCreateManyArenaInput> = z
  .object({
    id: z.number().optional(),
    category: z.lazy(() => CATEGORYSchema),
    amenitiesId: z.number(),
    date: z.coerce.date(),
    title: z.string(),
    description: z.string(),
  })
  .strict();

export const EventCreateManyArenaInputObjectSchema = Schema;
