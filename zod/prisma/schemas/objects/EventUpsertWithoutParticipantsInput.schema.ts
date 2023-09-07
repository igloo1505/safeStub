import { z } from 'zod';
import { EventUpdateWithoutParticipantsInputObjectSchema } from './EventUpdateWithoutParticipantsInput.schema';
import { EventUncheckedUpdateWithoutParticipantsInputObjectSchema } from './EventUncheckedUpdateWithoutParticipantsInput.schema';
import { EventCreateWithoutParticipantsInputObjectSchema } from './EventCreateWithoutParticipantsInput.schema';
import { EventUncheckedCreateWithoutParticipantsInputObjectSchema } from './EventUncheckedCreateWithoutParticipantsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.EventUpsertWithoutParticipantsInput> = z
  .object({
    update: z.union([
      z.lazy(() => EventUpdateWithoutParticipantsInputObjectSchema),
      z.lazy(() => EventUncheckedUpdateWithoutParticipantsInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => EventCreateWithoutParticipantsInputObjectSchema),
      z.lazy(() => EventUncheckedCreateWithoutParticipantsInputObjectSchema),
    ]),
  })
  .strict();

export const EventUpsertWithoutParticipantsInputObjectSchema = Schema;
