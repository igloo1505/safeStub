import { z } from 'zod';
import { TicketWhereUniqueInputObjectSchema } from './TicketWhereUniqueInput.schema';
import { TicketUpdateWithoutTicketGroupInputObjectSchema } from './TicketUpdateWithoutTicketGroupInput.schema';
import { TicketUncheckedUpdateWithoutTicketGroupInputObjectSchema } from './TicketUncheckedUpdateWithoutTicketGroupInput.schema';
import { TicketCreateWithoutTicketGroupInputObjectSchema } from './TicketCreateWithoutTicketGroupInput.schema';
import { TicketUncheckedCreateWithoutTicketGroupInputObjectSchema } from './TicketUncheckedCreateWithoutTicketGroupInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TicketUpsertWithWhereUniqueWithoutTicketGroupInput> =
  z
    .object({
      where: z.lazy(() => TicketWhereUniqueInputObjectSchema),
      update: z.union([
        z.lazy(() => TicketUpdateWithoutTicketGroupInputObjectSchema),
        z.lazy(() => TicketUncheckedUpdateWithoutTicketGroupInputObjectSchema),
      ]),
      create: z.union([
        z.lazy(() => TicketCreateWithoutTicketGroupInputObjectSchema),
        z.lazy(() => TicketUncheckedCreateWithoutTicketGroupInputObjectSchema),
      ]),
    })
    .strict();

export const TicketUpsertWithWhereUniqueWithoutTicketGroupInputObjectSchema =
  Schema;
