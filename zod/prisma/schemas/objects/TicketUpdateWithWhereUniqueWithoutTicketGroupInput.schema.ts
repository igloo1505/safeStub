import { z } from 'zod';
import { TicketWhereUniqueInputObjectSchema } from './TicketWhereUniqueInput.schema';
import { TicketUpdateWithoutTicketGroupInputObjectSchema } from './TicketUpdateWithoutTicketGroupInput.schema';
import { TicketUncheckedUpdateWithoutTicketGroupInputObjectSchema } from './TicketUncheckedUpdateWithoutTicketGroupInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TicketUpdateWithWhereUniqueWithoutTicketGroupInput> =
  z
    .object({
      where: z.lazy(() => TicketWhereUniqueInputObjectSchema),
      data: z.union([
        z.lazy(() => TicketUpdateWithoutTicketGroupInputObjectSchema),
        z.lazy(() => TicketUncheckedUpdateWithoutTicketGroupInputObjectSchema),
      ]),
    })
    .strict();

export const TicketUpdateWithWhereUniqueWithoutTicketGroupInputObjectSchema =
  Schema;
