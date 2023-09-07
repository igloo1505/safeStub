import { z } from 'zod';
import { TicketCreateWithoutTicketGroupInputObjectSchema } from './TicketCreateWithoutTicketGroupInput.schema';
import { TicketUncheckedCreateWithoutTicketGroupInputObjectSchema } from './TicketUncheckedCreateWithoutTicketGroupInput.schema';
import { TicketCreateOrConnectWithoutTicketGroupInputObjectSchema } from './TicketCreateOrConnectWithoutTicketGroupInput.schema';
import { TicketCreateManyTicketGroupInputEnvelopeObjectSchema } from './TicketCreateManyTicketGroupInputEnvelope.schema';
import { TicketWhereUniqueInputObjectSchema } from './TicketWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TicketCreateNestedManyWithoutTicketGroupInput> =
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
      createMany: z
        .lazy(() => TicketCreateManyTicketGroupInputEnvelopeObjectSchema)
        .optional(),
      connect: z
        .union([
          z.lazy(() => TicketWhereUniqueInputObjectSchema),
          z.lazy(() => TicketWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const TicketCreateNestedManyWithoutTicketGroupInputObjectSchema = Schema;
