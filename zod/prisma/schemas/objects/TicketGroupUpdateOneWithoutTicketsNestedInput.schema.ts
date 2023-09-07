import { z } from 'zod';
import { TicketGroupCreateWithoutTicketsInputObjectSchema } from './TicketGroupCreateWithoutTicketsInput.schema';
import { TicketGroupUncheckedCreateWithoutTicketsInputObjectSchema } from './TicketGroupUncheckedCreateWithoutTicketsInput.schema';
import { TicketGroupCreateOrConnectWithoutTicketsInputObjectSchema } from './TicketGroupCreateOrConnectWithoutTicketsInput.schema';
import { TicketGroupUpsertWithoutTicketsInputObjectSchema } from './TicketGroupUpsertWithoutTicketsInput.schema';
import { TicketGroupWhereUniqueInputObjectSchema } from './TicketGroupWhereUniqueInput.schema';
import { TicketGroupUpdateWithoutTicketsInputObjectSchema } from './TicketGroupUpdateWithoutTicketsInput.schema';
import { TicketGroupUncheckedUpdateWithoutTicketsInputObjectSchema } from './TicketGroupUncheckedUpdateWithoutTicketsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TicketGroupUpdateOneWithoutTicketsNestedInput> =
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
      upsert: z
        .lazy(() => TicketGroupUpsertWithoutTicketsInputObjectSchema)
        .optional(),
      disconnect: z.boolean().optional(),
      delete: z.boolean().optional(),
      connect: z.lazy(() => TicketGroupWhereUniqueInputObjectSchema).optional(),
      update: z
        .union([
          z.lazy(() => TicketGroupUpdateWithoutTicketsInputObjectSchema),
          z.lazy(
            () => TicketGroupUncheckedUpdateWithoutTicketsInputObjectSchema,
          ),
        ])
        .optional(),
    })
    .strict();

export const TicketGroupUpdateOneWithoutTicketsNestedInputObjectSchema = Schema;
