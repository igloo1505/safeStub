import { z } from 'zod';
import { EventWhereUniqueInputObjectSchema } from './EventWhereUniqueInput.schema';
import { EventUpdateWithoutArenaInputObjectSchema } from './EventUpdateWithoutArenaInput.schema';
import { EventUncheckedUpdateWithoutArenaInputObjectSchema } from './EventUncheckedUpdateWithoutArenaInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.EventUpdateWithWhereUniqueWithoutArenaInput> = z
  .object({
    where: z.lazy(() => EventWhereUniqueInputObjectSchema),
    data: z.union([
      z.lazy(() => EventUpdateWithoutArenaInputObjectSchema),
      z.lazy(() => EventUncheckedUpdateWithoutArenaInputObjectSchema),
    ]),
  })
  .strict();

export const EventUpdateWithWhereUniqueWithoutArenaInputObjectSchema = Schema;
