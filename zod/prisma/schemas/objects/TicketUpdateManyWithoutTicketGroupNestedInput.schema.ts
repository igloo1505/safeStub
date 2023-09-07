import { z } from 'zod';
import { TicketCreateWithoutTicketGroupInputObjectSchema } from './TicketCreateWithoutTicketGroupInput.schema';
import { TicketUncheckedCreateWithoutTicketGroupInputObjectSchema } from './TicketUncheckedCreateWithoutTicketGroupInput.schema';
import { TicketCreateOrConnectWithoutTicketGroupInputObjectSchema } from './TicketCreateOrConnectWithoutTicketGroupInput.schema';
import { TicketUpsertWithWhereUniqueWithoutTicketGroupInputObjectSchema } from './TicketUpsertWithWhereUniqueWithoutTicketGroupInput.schema';
import { TicketCreateManyTicketGroupInputEnvelopeObjectSchema } from './TicketCreateManyTicketGroupInputEnvelope.schema';
import { TicketWhereUniqueInputObjectSchema } from './TicketWhereUniqueInput.schema';
import { TicketUpdateWithWhereUniqueWithoutTicketGroupInputObjectSchema } from './TicketUpdateWithWhereUniqueWithoutTicketGroupInput.schema';
import { TicketUpdateManyWithWhereWithoutTicketGroupInputObjectSchema } from './TicketUpdateManyWithWhereWithoutTicketGroupInput.schema';
import { TicketScalarWhereInputObjectSchema } from './TicketScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TicketUpdateManyWithoutTicketGroupNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => TicketCreateWithoutTicketGroupInputObjectSchema),
          z.lazy(() => TicketCreateWithoutTicketGroupInputObjectSchema).array(),
          z.lazy(
            () => TicketUncheckedCreateWithoutTicketGroupInputObjectSchema,
          ),
          z
            .lazy(
              () => TicketUncheckedCreateWithoutTicketGroupInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(
            () => TicketCreateOrConnectWithoutTicketGroupInputObjectSchema,
          ),
          z
            .lazy(
              () => TicketCreateOrConnectWithoutTicketGroupInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      upsert: z
        .union([
          z.lazy(
            () =>
              TicketUpsertWithWhereUniqueWithoutTicketGroupInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                TicketUpsertWithWhereUniqueWithoutTicketGroupInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => TicketCreateManyTicketGroupInputEnvelopeObjectSchema)
        .optional(),
      set: z
        .union([
          z.lazy(() => TicketWhereUniqueInputObjectSchema),
          z.lazy(() => TicketWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      disconnect: z
        .union([
          z.lazy(() => TicketWhereUniqueInputObjectSchema),
          z.lazy(() => TicketWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      delete: z
        .union([
          z.lazy(() => TicketWhereUniqueInputObjectSchema),
          z.lazy(() => TicketWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      connect: z
        .union([
          z.lazy(() => TicketWhereUniqueInputObjectSchema),
          z.lazy(() => TicketWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      update: z
        .union([
          z.lazy(
            () =>
              TicketUpdateWithWhereUniqueWithoutTicketGroupInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                TicketUpdateWithWhereUniqueWithoutTicketGroupInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(
            () => TicketUpdateManyWithWhereWithoutTicketGroupInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                TicketUpdateManyWithWhereWithoutTicketGroupInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      deleteMany: z
        .union([
          z.lazy(() => TicketScalarWhereInputObjectSchema),
          z.lazy(() => TicketScalarWhereInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const TicketUpdateManyWithoutTicketGroupNestedInputObjectSchema = Schema;
