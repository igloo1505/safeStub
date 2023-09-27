import { z } from 'zod';
import { TRANSACTIONSTATUSSchema } from '../enums/TRANSACTIONSTATUS.schema';
import { PAYOUTMETHODSSchema } from '../enums/PAYOUTMETHODS.schema';
import { TicketUncheckedCreateNestedManyWithoutTransactionInputObjectSchema } from './TicketUncheckedCreateNestedManyWithoutTransactionInput.schema';
import { TicketGroupUncheckedCreateNestedManyWithoutTransactionInputObjectSchema } from './TicketGroupUncheckedCreateNestedManyWithoutTransactionInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TransactionUncheckedCreateWithoutBuyerInput> = z
  .object({
    id: z.number().optional(),
    listedPrice: z.number(),
    sellerId: z.number(),
    status: z.lazy(() => TRANSACTIONSTATUSSchema).optional(),
    total: z.number(),
    payout: z.number(),
    payoutMethod: z.lazy(() => PAYOUTMETHODSSchema),
    postedOn: z.coerce.date().optional(),
    purchasedOn: z.coerce.date().optional().nullable(),
    tickets: z
      .lazy(
        () =>
          TicketUncheckedCreateNestedManyWithoutTransactionInputObjectSchema,
      )
      .optional(),
    ticketGroups: z
      .lazy(
        () =>
          TicketGroupUncheckedCreateNestedManyWithoutTransactionInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const TransactionUncheckedCreateWithoutBuyerInputObjectSchema = Schema;
