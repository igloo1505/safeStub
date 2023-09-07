import { z } from 'zod';
import { EventCreateWithoutParticipantsInputObjectSchema } from './EventCreateWithoutParticipantsInput.schema';
import { EventUncheckedCreateWithoutParticipantsInputObjectSchema } from './EventUncheckedCreateWithoutParticipantsInput.schema';
import { EventCreateOrConnectWithoutParticipantsInputObjectSchema } from './EventCreateOrConnectWithoutParticipantsInput.schema';
import { EventWhereUniqueInputObjectSchema } from './EventWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.EventCreateNestedOneWithoutParticipantsInput> = z
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
    connect: z.lazy(() => EventWhereUniqueInputObjectSchema).optional(),
  })
  .strict();

export const EventCreateNestedOneWithoutParticipantsInputObjectSchema = Schema;
