import { z } from 'zod';
import { TicketWhereUniqueInputObjectSchema } from './TicketWhereUniqueInput.schema';
import { TicketCreateWithoutTicketGroupInputObjectSchema } from './TicketCreateWithoutTicketGroupInput.schema';
import { TicketUncheckedCreateWithoutTicketGroupInputObjectSchema } from './TicketUncheckedCreateWithoutTicketGroupInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TicketCreateOrConnectWithoutTicketGroupInput> = z
  .object({
    where: z.lazy(() => TicketWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => TicketCreateWithoutTicketGroupInputObjectSchema),
      z.lazy(() => TicketUncheckedCreateWithoutTicketGroupInputObjectSchema),
    ]),
  })
  .strict();

export const TicketCreateOrConnectWithoutTicketGroupInputObjectSchema = Schema;
