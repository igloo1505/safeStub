import { z } from 'zod';
import { EventCreateWithoutTagsInputObjectSchema } from './EventCreateWithoutTagsInput.schema';
import { EventUncheckedCreateWithoutTagsInputObjectSchema } from './EventUncheckedCreateWithoutTagsInput.schema';
import { EventCreateOrConnectWithoutTagsInputObjectSchema } from './EventCreateOrConnectWithoutTagsInput.schema';
import { EventUpsertWithWhereUniqueWithoutTagsInputObjectSchema } from './EventUpsertWithWhereUniqueWithoutTagsInput.schema';
import { EventWhereUniqueInputObjectSchema } from './EventWhereUniqueInput.schema';
import { EventUpdateWithWhereUniqueWithoutTagsInputObjectSchema } from './EventUpdateWithWhereUniqueWithoutTagsInput.schema';
import { EventUpdateManyWithWhereWithoutTagsInputObjectSchema } from './EventUpdateManyWithWhereWithoutTagsInput.schema';
import { EventScalarWhereInputObjectSchema } from './EventScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.EventUncheckedUpdateManyWithoutTagsNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => EventCreateWithoutTagsInputObjectSchema),
          z.lazy(() => EventCreateWithoutTagsInputObjectSchema).array(),
          z.lazy(() => EventUncheckedCreateWithoutTagsInputObjectSchema),
          z
            .lazy(() => EventUncheckedCreateWithoutTagsInputObjectSchema)
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(() => EventCreateOrConnectWithoutTagsInputObjectSchema),
          z
            .lazy(() => EventCreateOrConnectWithoutTagsInputObjectSchema)
            .array(),
        ])
        .optional(),
      upsert: z
        .union([
          z.lazy(() => EventUpsertWithWhereUniqueWithoutTagsInputObjectSchema),
          z
            .lazy(() => EventUpsertWithWhereUniqueWithoutTagsInputObjectSchema)
            .array(),
        ])
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
          z.lazy(() => EventUpdateWithWhereUniqueWithoutTagsInputObjectSchema),
          z
            .lazy(() => EventUpdateWithWhereUniqueWithoutTagsInputObjectSchema)
            .array(),
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(() => EventUpdateManyWithWhereWithoutTagsInputObjectSchema),
          z
            .lazy(() => EventUpdateManyWithWhereWithoutTagsInputObjectSchema)
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

export const EventUncheckedUpdateManyWithoutTagsNestedInputObjectSchema =
  Schema;
