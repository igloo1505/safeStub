import { z } from 'zod';
import { TicketCreateWithoutEventInputObjectSchema } from './TicketCreateWithoutEventInput.schema';
import { TicketUncheckedCreateWithoutEventInputObjectSchema } from './TicketUncheckedCreateWithoutEventInput.schema';
import { TicketCreateOrConnectWithoutEventInputObjectSchema } from './TicketCreateOrConnectWithoutEventInput.schema';
import { TicketCreateManyEventInputEnvelopeObjectSchema } from './TicketCreateManyEventInputEnvelope.schema';
import { TicketWhereUniqueInputObjectSchema } from './TicketWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TicketUncheckedCreateNestedManyWithoutEventInput> =
  z
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
      createMany: z
        .lazy(() => TicketCreateManyEventInputEnvelopeObjectSchema)
        .optional(),
      connect: z
        .union([
          z.lazy(() => TicketWhereUniqueInputObjectSchema),
          z.lazy(() => TicketWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const TicketUncheckedCreateNestedManyWithoutEventInputObjectSchema =
  Schema;
