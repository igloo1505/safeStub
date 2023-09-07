import { z } from 'zod';
import { TicketGroupCreateWithoutEventInputObjectSchema } from './TicketGroupCreateWithoutEventInput.schema';
import { TicketGroupUncheckedCreateWithoutEventInputObjectSchema } from './TicketGroupUncheckedCreateWithoutEventInput.schema';
import { TicketGroupCreateOrConnectWithoutEventInputObjectSchema } from './TicketGroupCreateOrConnectWithoutEventInput.schema';
import { TicketGroupCreateManyEventInputEnvelopeObjectSchema } from './TicketGroupCreateManyEventInputEnvelope.schema';
import { TicketGroupWhereUniqueInputObjectSchema } from './TicketGroupWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TicketGroupCreateNestedManyWithoutEventInput> = z
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
    createMany: z
      .lazy(() => TicketGroupCreateManyEventInputEnvelopeObjectSchema)
      .optional(),
    connect: z
      .union([
        z.lazy(() => TicketGroupWhereUniqueInputObjectSchema),
        z.lazy(() => TicketGroupWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
  })
  .strict();

export const TicketGroupCreateNestedManyWithoutEventInputObjectSchema = Schema;
