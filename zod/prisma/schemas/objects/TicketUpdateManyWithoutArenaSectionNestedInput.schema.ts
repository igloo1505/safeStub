import { z } from 'zod';
import { TicketCreateWithoutArenaSectionInputObjectSchema } from './TicketCreateWithoutArenaSectionInput.schema';
import { TicketUncheckedCreateWithoutArenaSectionInputObjectSchema } from './TicketUncheckedCreateWithoutArenaSectionInput.schema';
import { TicketCreateOrConnectWithoutArenaSectionInputObjectSchema } from './TicketCreateOrConnectWithoutArenaSectionInput.schema';
import { TicketUpsertWithWhereUniqueWithoutArenaSectionInputObjectSchema } from './TicketUpsertWithWhereUniqueWithoutArenaSectionInput.schema';
import { TicketCreateManyArenaSectionInputEnvelopeObjectSchema } from './TicketCreateManyArenaSectionInputEnvelope.schema';
import { TicketWhereUniqueInputObjectSchema } from './TicketWhereUniqueInput.schema';
import { TicketUpdateWithWhereUniqueWithoutArenaSectionInputObjectSchema } from './TicketUpdateWithWhereUniqueWithoutArenaSectionInput.schema';
import { TicketUpdateManyWithWhereWithoutArenaSectionInputObjectSchema } from './TicketUpdateManyWithWhereWithoutArenaSectionInput.schema';
import { TicketScalarWhereInputObjectSchema } from './TicketScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TicketUpdateManyWithoutArenaSectionNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => TicketCreateWithoutArenaSectionInputObjectSchema),
          z
            .lazy(() => TicketCreateWithoutArenaSectionInputObjectSchema)
            .array(),
          z.lazy(
            () => TicketUncheckedCreateWithoutArenaSectionInputObjectSchema,
          ),
          z
            .lazy(
              () => TicketUncheckedCreateWithoutArenaSectionInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(
            () => TicketCreateOrConnectWithoutArenaSectionInputObjectSchema,
          ),
          z
            .lazy(
              () => TicketCreateOrConnectWithoutArenaSectionInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      upsert: z
        .union([
          z.lazy(
            () =>
              TicketUpsertWithWhereUniqueWithoutArenaSectionInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                TicketUpsertWithWhereUniqueWithoutArenaSectionInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => TicketCreateManyArenaSectionInputEnvelopeObjectSchema)
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
              TicketUpdateWithWhereUniqueWithoutArenaSectionInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                TicketUpdateWithWhereUniqueWithoutArenaSectionInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(
            () => TicketUpdateManyWithWhereWithoutArenaSectionInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                TicketUpdateManyWithWhereWithoutArenaSectionInputObjectSchema,
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

export const TicketUpdateManyWithoutArenaSectionNestedInputObjectSchema =
  Schema;
