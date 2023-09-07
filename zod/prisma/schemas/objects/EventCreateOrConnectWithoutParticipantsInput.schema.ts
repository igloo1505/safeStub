import { z } from 'zod';
import { EventWhereUniqueInputObjectSchema } from './EventWhereUniqueInput.schema';
import { EventCreateWithoutParticipantsInputObjectSchema } from './EventCreateWithoutParticipantsInput.schema';
import { EventUncheckedCreateWithoutParticipantsInputObjectSchema } from './EventUncheckedCreateWithoutParticipantsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.EventCreateOrConnectWithoutParticipantsInput> = z
  .object({
    where: z.lazy(() => EventWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => EventCreateWithoutParticipantsInputObjectSchema),
      z.lazy(() => EventUncheckedCreateWithoutParticipantsInputObjectSchema),
    ]),
  })
  .strict();

export const EventCreateOrConnectWithoutParticipantsInputObjectSchema = Schema;
