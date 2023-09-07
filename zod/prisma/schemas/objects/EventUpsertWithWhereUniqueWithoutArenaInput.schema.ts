import { z } from 'zod';
import { EventWhereUniqueInputObjectSchema } from './EventWhereUniqueInput.schema';
import { EventUpdateWithoutArenaInputObjectSchema } from './EventUpdateWithoutArenaInput.schema';
import { EventUncheckedUpdateWithoutArenaInputObjectSchema } from './EventUncheckedUpdateWithoutArenaInput.schema';
import { EventCreateWithoutArenaInputObjectSchema } from './EventCreateWithoutArenaInput.schema';
import { EventUncheckedCreateWithoutArenaInputObjectSchema } from './EventUncheckedCreateWithoutArenaInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.EventUpsertWithWhereUniqueWithoutArenaInput> = z
  .object({
    where: z.lazy(() => EventWhereUniqueInputObjectSchema),
    update: z.union([
      z.lazy(() => EventUpdateWithoutArenaInputObjectSchema),
      z.lazy(() => EventUncheckedUpdateWithoutArenaInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => EventCreateWithoutArenaInputObjectSchema),
      z.lazy(() => EventUncheckedCreateWithoutArenaInputObjectSchema),
    ]),
  })
  .strict();

export const EventUpsertWithWhereUniqueWithoutArenaInputObjectSchema = Schema;
