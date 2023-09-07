import { z } from 'zod';
import { EventWhereUniqueInputObjectSchema } from './EventWhereUniqueInput.schema';
import { EventCreateWithoutArenaInputObjectSchema } from './EventCreateWithoutArenaInput.schema';
import { EventUncheckedCreateWithoutArenaInputObjectSchema } from './EventUncheckedCreateWithoutArenaInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.EventCreateOrConnectWithoutArenaInput> = z
  .object({
    where: z.lazy(() => EventWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => EventCreateWithoutArenaInputObjectSchema),
      z.lazy(() => EventUncheckedCreateWithoutArenaInputObjectSchema),
    ]),
  })
  .strict();

export const EventCreateOrConnectWithoutArenaInputObjectSchema = Schema;
