import { z } from 'zod';
import { EventCreateWithoutArenaInputObjectSchema } from './EventCreateWithoutArenaInput.schema';
import { EventUncheckedCreateWithoutArenaInputObjectSchema } from './EventUncheckedCreateWithoutArenaInput.schema';
import { EventCreateOrConnectWithoutArenaInputObjectSchema } from './EventCreateOrConnectWithoutArenaInput.schema';
import { EventUpsertWithWhereUniqueWithoutArenaInputObjectSchema } from './EventUpsertWithWhereUniqueWithoutArenaInput.schema';
import { EventCreateManyArenaInputEnvelopeObjectSchema } from './EventCreateManyArenaInputEnvelope.schema';
import { EventWhereUniqueInputObjectSchema } from './EventWhereUniqueInput.schema';
import { EventUpdateWithWhereUniqueWithoutArenaInputObjectSchema } from './EventUpdateWithWhereUniqueWithoutArenaInput.schema';
import { EventUpdateManyWithWhereWithoutArenaInputObjectSchema } from './EventUpdateManyWithWhereWithoutArenaInput.schema';
import { EventScalarWhereInputObjectSchema } from './EventScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.EventUpdateManyWithoutArenaNestedInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => EventCreateWithoutArenaInputObjectSchema),
        z.lazy(() => EventCreateWithoutArenaInputObjectSchema).array(),
        z.lazy(() => EventUncheckedCreateWithoutArenaInputObjectSchema),
        z.lazy(() => EventUncheckedCreateWithoutArenaInputObjectSchema).array(),
      ])
      .optional(),
    connectOrCreate: z
      .union([
        z.lazy(() => EventCreateOrConnectWithoutArenaInputObjectSchema),
        z.lazy(() => EventCreateOrConnectWithoutArenaInputObjectSchema).array(),
      ])
      .optional(),
    upsert: z
      .union([
        z.lazy(() => EventUpsertWithWhereUniqueWithoutArenaInputObjectSchema),
        z
          .lazy(() => EventUpsertWithWhereUniqueWithoutArenaInputObjectSchema)
          .array(),
      ])
      .optional(),
    createMany: z
      .lazy(() => EventCreateManyArenaInputEnvelopeObjectSchema)
      .optional(),
    set: z
      .union([
        z.lazy(() => EventWhereUniqueInputObjectSchema),
        z.lazy(() => EventWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    disconnect: z
      .union([
        z.lazy(() => EventWhereUniqueInputObjectSchema),
        z.lazy(() => EventWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    delete: z
      .union([
        z.lazy(() => EventWhereUniqueInputObjectSchema),
        z.lazy(() => EventWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    connect: z
      .union([
        z.lazy(() => EventWhereUniqueInputObjectSchema),
        z.lazy(() => EventWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    update: z
      .union([
        z.lazy(() => EventUpdateWithWhereUniqueWithoutArenaInputObjectSchema),
        z
          .lazy(() => EventUpdateWithWhereUniqueWithoutArenaInputObjectSchema)
          .array(),
      ])
      .optional(),
    updateMany: z
      .union([
        z.lazy(() => EventUpdateManyWithWhereWithoutArenaInputObjectSchema),
        z
          .lazy(() => EventUpdateManyWithWhereWithoutArenaInputObjectSchema)
          .array(),
      ])
      .optional(),
    deleteMany: z
      .union([
        z.lazy(() => EventScalarWhereInputObjectSchema),
        z.lazy(() => EventScalarWhereInputObjectSchema).array(),
      ])
      .optional(),
  })
  .strict();

export const EventUpdateManyWithoutArenaNestedInputObjectSchema = Schema;
