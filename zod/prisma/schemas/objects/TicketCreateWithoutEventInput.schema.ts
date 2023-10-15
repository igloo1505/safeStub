import { z } from 'zod';
import { TicketStatusSchema } from '../enums/TicketStatus.schema';
import { TicketGroupCreateNestedOneWithoutTicketsInputObjectSchema } from './TicketGroupCreateNestedOneWithoutTicketsInput.schema';
import { UserCreateNestedOneWithoutTicketsSoldInputObjectSchema } from './UserCreateNestedOneWithoutTicketsSoldInput.schema';
import { UserCreateNestedOneWithoutTicketsPurchasedInputObjectSchema } from './UserCreateNestedOneWithoutTicketsPurchasedInput.schema';
import { TransactionCreateNestedOneWithoutTicketsInputObjectSchema } from './TransactionCreateNestedOneWithoutTicketsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TicketCreateWithoutEventInput> = z
  .object({
    section: z.string(),
    row: z.string(),
    seat: z.string(),
    ticketNumber: z.string().optional().nullable(),
    status: z.lazy(() => TicketStatusSchema).optional(),
    TicketGroup: z
      .lazy(() => TicketGroupCreateNestedOneWithoutTicketsInputObjectSchema)
      .optional(),
    seller: z.lazy(
      () => UserCreateNestedOneWithoutTicketsSoldInputObjectSchema,
    ),
    buyer: z
      .lazy(() => UserCreateNestedOneWithoutTicketsPurchasedInputObjectSchema)
      .optional(),
    transaction: z
      .lazy(() => TransactionCreateNestedOneWithoutTicketsInputObjectSchema)
      .optional(),
  })
  .strict();

export const TicketCreateWithoutEventInputObjectSchema = Schema;
