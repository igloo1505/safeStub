import { z } from 'zod';
import { TicketScalarWhereInputObjectSchema } from './TicketScalarWhereInput.schema';
import { TicketUpdateManyMutationInputObjectSchema } from './TicketUpdateManyMutationInput.schema';
import { TicketUncheckedUpdateManyWithoutTicketsInputObjectSchema } from './TicketUncheckedUpdateManyWithoutTicketsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TicketUpdateManyWithWhereWithoutTicketGroupInput> =
  z
    .object({
      where: z.lazy(() => TicketScalarWhereInputObjectSchema),
      data: z.union([
        z.lazy(() => TicketUpdateManyMutationInputObjectSchema),
        z.lazy(() => TicketUncheckedUpdateManyWithoutTicketsInputObjectSchema),
      ]),
    })
    .strict();

export const TicketUpdateManyWithWhereWithoutTicketGroupInputObjectSchema =
  Schema;
