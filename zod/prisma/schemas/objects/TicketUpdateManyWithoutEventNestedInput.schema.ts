import { z } from 'zod';
import { TicketCreateWithoutEventInputObjectSchema } from './TicketCreateWithoutEventInput.schema';
import { TicketUncheckedCreateWithoutEventInputObjectSchema } from './TicketUncheckedCreateWithoutEventInput.schema';
import { TicketCreateOrConnectWithoutEventInputObjectSchema } from './TicketCreateOrConnectWithoutEventInput.schema';
import { TicketUpsertWithWhereUniqueWithoutEventInputObjectSchema } from './TicketUpsertWithWhereUniqueWithoutEventInput.schema';
import { TicketCreateManyEventInputEnvelopeObjectSchema } from './TicketCreateManyEventInputEnvelope.schema';
import { TicketWhereUniqueInputObjectSchema } from './TicketWhereUniqueInput.schema';
import { TicketUpdateWithWhereUniqueWithoutEventInputObjectSchema } from './TicketUpdateWithWhereUniqueWithoutEventInput.schema';
import { TicketUpdateManyWithWhereWithoutEventInputObjectSchema } from './TicketUpdateManyWithWhereWithoutEventInput.schema';
import { TicketScalarWhereInputObjectSchema } from './TicketScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TicketUpdateManyWithoutEventNestedInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => TicketCreateWithoutEventInputObjectSchema),
        z.lazy(() => TicketCreateWithoutEventInputObjectSchema).array(),
        z.lazy(() => TicketUncheckedCreateWithoutEventInputObjectSchema),
        z
          .lazy(() => TicketUncheckedCreateWithoutEventInputObjectSchema)
          .array(),
      ])
      .optional(),
    connectOrCreate: z
      .union([
        z.lazy(() => TicketCreateOrConnectWithoutEventInputObjectSchema),
        z
          .lazy(() => TicketCreateOrConnectWithoutEventInputObjectSchema)
          .array(),
      ])
      .optional(),
    upsert: z
      .union([
        z.lazy(() => TicketUpsertWithWhereUniqueWithoutEventInputObjectSchema),
        z
          .lazy(() => TicketUpsertWithWhereUniqueWithoutEventInputObjectSchema)
          .array(),
      ])
      .optional(),
    createMany: z
      .lazy(() => TicketCreateManyEventInputEnvelopeObjectSchema)
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
        z.lazy(() => TicketUpdateWithWhereUniqueWithoutEventInputObjectSchema),
        z
          .lazy(() => TicketUpdateWithWhereUniqueWithoutEventInputObjectSchema)
          .array(),
      ])
      .optional(),
    updateMany: z
      .union([
        z.lazy(() => TicketUpdateManyWithWhereWithoutEventInputObjectSchema),
        z
          .lazy(() => TicketUpdateManyWithWhereWithoutEventInputObjectSchema)
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

export const TicketUpdateManyWithoutEventNestedInputObjectSchema = Schema;
