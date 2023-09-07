import { z } from 'zod';
import { TicketGroupWhereUniqueInputObjectSchema } from './TicketGroupWhereUniqueInput.schema';
import { TicketGroupCreateWithoutTicketsInputObjectSchema } from './TicketGroupCreateWithoutTicketsInput.schema';
import { TicketGroupUncheckedCreateWithoutTicketsInputObjectSchema } from './TicketGroupUncheckedCreateWithoutTicketsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TicketGroupCreateOrConnectWithoutTicketsInput> =
  z
    .object({
      where: z.lazy(() => TicketGroupWhereUniqueInputObjectSchema),
      create: z.union([
        z.lazy(() => TicketGroupCreateWithoutTicketsInputObjectSchema),
        z.lazy(() => TicketGroupUncheckedCreateWithoutTicketsInputObjectSchema),
      ]),
    })
    .strict();

export const TicketGroupCreateOrConnectWithoutTicketsInputObjectSchema = Schema;
