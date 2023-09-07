import { z } from 'zod';
import { TicketGroupCreateWithoutEventInputObjectSchema } from './TicketGroupCreateWithoutEventInput.schema';
import { TicketGroupUncheckedCreateWithoutEventInputObjectSchema } from './TicketGroupUncheckedCreateWithoutEventInput.schema';
import { TicketGroupCreateOrConnectWithoutEventInputObjectSchema } from './TicketGroupCreateOrConnectWithoutEventInput.schema';
import { TicketGroupUpsertWithWhereUniqueWithoutEventInputObjectSchema } from './TicketGroupUpsertWithWhereUniqueWithoutEventInput.schema';
import { TicketGroupCreateManyEventInputEnvelopeObjectSchema } from './TicketGroupCreateManyEventInputEnvelope.schema';
import { TicketGroupWhereUniqueInputObjectSchema } from './TicketGroupWhereUniqueInput.schema';
import { TicketGroupUpdateWithWhereUniqueWithoutEventInputObjectSchema } from './TicketGroupUpdateWithWhereUniqueWithoutEventInput.schema';
import { TicketGroupUpdateManyWithWhereWithoutEventInputObjectSchema } from './TicketGroupUpdateManyWithWhereWithoutEventInput.schema';
import { TicketGroupScalarWhereInputObjectSchema } from './TicketGroupScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TicketGroupUpdateManyWithoutEventNestedInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => TicketGroupCreateWithoutEventInputObjectSchema),
        z.lazy(() => TicketGroupCreateWithoutEventInputObjectSchema).array(),
        z.lazy(() => TicketGroupUncheckedCreateWithoutEventInputObjectSchema),
        z
          .lazy(() => TicketGroupUncheckedCreateWithoutEventInputObjectSchema)
          .array(),
      ])
      .optional(),
    connectOrCreate: z
      .union([
        z.lazy(() => TicketGroupCreateOrConnectWithoutEventInputObjectSchema),
        z
          .lazy(() => TicketGroupCreateOrConnectWithoutEventInputObjectSchema)
          .array(),
      ])
      .optional(),
    upsert: z
      .union([
        z.lazy(
          () => TicketGroupUpsertWithWhereUniqueWithoutEventInputObjectSchema,
        ),
        z
          .lazy(
            () => TicketGroupUpsertWithWhereUniqueWithoutEventInputObjectSchema,
          )
          .array(),
      ])
      .optional(),
    createMany: z
      .lazy(() => TicketGroupCreateManyEventInputEnvelopeObjectSchema)
      .optional(),
    set: z
      .union([
        z.lazy(() => TicketGroupWhereUniqueInputObjectSchema),
        z.lazy(() => TicketGroupWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    disconnect: z
      .union([
        z.lazy(() => TicketGroupWhereUniqueInputObjectSchema),
        z.lazy(() => TicketGroupWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    delete: z
      .union([
        z.lazy(() => TicketGroupWhereUniqueInputObjectSchema),
        z.lazy(() => TicketGroupWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    connect: z
      .union([
        z.lazy(() => TicketGroupWhereUniqueInputObjectSchema),
        z.lazy(() => TicketGroupWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    update: z
      .union([
        z.lazy(
          () => TicketGroupUpdateWithWhereUniqueWithoutEventInputObjectSchema,
        ),
        z
          .lazy(
            () => TicketGroupUpdateWithWhereUniqueWithoutEventInputObjectSchema,
          )
          .array(),
      ])
      .optional(),
    updateMany: z
      .union([
        z.lazy(
          () => TicketGroupUpdateManyWithWhereWithoutEventInputObjectSchema,
        ),
        z
          .lazy(
            () => TicketGroupUpdateManyWithWhereWithoutEventInputObjectSchema,
          )
          .array(),
      ])
      .optional(),
    deleteMany: z
      .union([
        z.lazy(() => TicketGroupScalarWhereInputObjectSchema),
        z.lazy(() => TicketGroupScalarWhereInputObjectSchema).array(),
      ])
      .optional(),
  })
  .strict();

export const TicketGroupUpdateManyWithoutEventNestedInputObjectSchema = Schema;
