import { z } from 'zod';
import { TicketGroupCreateWithoutTicketsInputObjectSchema } from './TicketGroupCreateWithoutTicketsInput.schema';
import { TicketGroupUncheckedCreateWithoutTicketsInputObjectSchema } from './TicketGroupUncheckedCreateWithoutTicketsInput.schema';
import { TicketGroupCreateOrConnectWithoutTicketsInputObjectSchema } from './TicketGroupCreateOrConnectWithoutTicketsInput.schema';
import { TicketGroupWhereUniqueInputObjectSchema } from './TicketGroupWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TicketGroupCreateNestedOneWithoutTicketsInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => TicketGroupCreateWithoutTicketsInputObjectSchema),
          z.lazy(
            () => TicketGroupUncheckedCreateWithoutTicketsInputObjectSchema,
          ),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(() => TicketGroupCreateOrConnectWithoutTicketsInputObjectSchema)
        .optional(),
      connect: z.lazy(() => TicketGroupWhereUniqueInputObjectSchema).optional(),
    })
    .strict();

export const TicketGroupCreateNestedOneWithoutTicketsInputObjectSchema = Schema;
