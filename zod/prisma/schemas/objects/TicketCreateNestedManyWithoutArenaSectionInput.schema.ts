import { z } from 'zod';
import { TicketCreateWithoutArenaSectionInputObjectSchema } from './TicketCreateWithoutArenaSectionInput.schema';
import { TicketUncheckedCreateWithoutArenaSectionInputObjectSchema } from './TicketUncheckedCreateWithoutArenaSectionInput.schema';
import { TicketCreateOrConnectWithoutArenaSectionInputObjectSchema } from './TicketCreateOrConnectWithoutArenaSectionInput.schema';
import { TicketCreateManyArenaSectionInputEnvelopeObjectSchema } from './TicketCreateManyArenaSectionInputEnvelope.schema';
import { TicketWhereUniqueInputObjectSchema } from './TicketWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TicketCreateNestedManyWithoutArenaSectionInput> =
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
      createMany: z
        .lazy(() => TicketCreateManyArenaSectionInputEnvelopeObjectSchema)
        .optional(),
      connect: z
        .union([
          z.lazy(() => TicketWhereUniqueInputObjectSchema),
          z.lazy(() => TicketWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const TicketCreateNestedManyWithoutArenaSectionInputObjectSchema =
  Schema;
