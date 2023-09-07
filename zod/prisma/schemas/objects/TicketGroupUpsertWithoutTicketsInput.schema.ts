import { z } from 'zod';
import { TicketGroupUpdateWithoutTicketsInputObjectSchema } from './TicketGroupUpdateWithoutTicketsInput.schema';
import { TicketGroupUncheckedUpdateWithoutTicketsInputObjectSchema } from './TicketGroupUncheckedUpdateWithoutTicketsInput.schema';
import { TicketGroupCreateWithoutTicketsInputObjectSchema } from './TicketGroupCreateWithoutTicketsInput.schema';
import { TicketGroupUncheckedCreateWithoutTicketsInputObjectSchema } from './TicketGroupUncheckedCreateWithoutTicketsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TicketGroupUpsertWithoutTicketsInput> = z
  .object({
    update: z.union([
      z.lazy(() => TicketGroupUpdateWithoutTicketsInputObjectSchema),
      z.lazy(() => TicketGroupUncheckedUpdateWithoutTicketsInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => TicketGroupCreateWithoutTicketsInputObjectSchema),
      z.lazy(() => TicketGroupUncheckedCreateWithoutTicketsInputObjectSchema),
    ]),
  })
  .strict();

export const TicketGroupUpsertWithoutTicketsInputObjectSchema = Schema;
