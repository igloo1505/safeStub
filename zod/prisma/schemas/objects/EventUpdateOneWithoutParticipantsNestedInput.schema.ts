import { z } from 'zod';
import { EventCreateWithoutParticipantsInputObjectSchema } from './EventCreateWithoutParticipantsInput.schema';
import { EventUncheckedCreateWithoutParticipantsInputObjectSchema } from './EventUncheckedCreateWithoutParticipantsInput.schema';
import { EventCreateOrConnectWithoutParticipantsInputObjectSchema } from './EventCreateOrConnectWithoutParticipantsInput.schema';
import { EventUpsertWithoutParticipantsInputObjectSchema } from './EventUpsertWithoutParticipantsInput.schema';
import { EventWhereUniqueInputObjectSchema } from './EventWhereUniqueInput.schema';
import { EventUpdateWithoutParticipantsInputObjectSchema } from './EventUpdateWithoutParticipantsInput.schema';
import { EventUncheckedUpdateWithoutParticipantsInputObjectSchema } from './EventUncheckedUpdateWithoutParticipantsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.EventUpdateOneWithoutParticipantsNestedInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => EventCreateWithoutParticipantsInputObjectSchema),
        z.lazy(() => EventUncheckedCreateWithoutParticipantsInputObjectSchema),
      ])
      .optional(),
    connectOrCreate: z
      .lazy(() => EventCreateOrConnectWithoutParticipantsInputObjectSchema)
      .optional(),
    upsert: z
      .lazy(() => EventUpsertWithoutParticipantsInputObjectSchema)
      .optional(),
    disconnect: z.boolean().optional(),
    delete: z.boolean().optional(),
    connect: z.lazy(() => EventWhereUniqueInputObjectSchema).optional(),
    update: z
      .union([
        z.lazy(() => EventUpdateWithoutParticipantsInputObjectSchema),
        z.lazy(() => EventUncheckedUpdateWithoutParticipantsInputObjectSchema),
      ])
      .optional(),
  })
  .strict();

export const EventUpdateOneWithoutParticipantsNestedInputObjectSchema = Schema;
