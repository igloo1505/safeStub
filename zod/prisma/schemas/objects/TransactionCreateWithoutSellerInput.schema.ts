import { z } from 'zod';
import { TRANSACTIONSTATUSSchema } from '../enums/TRANSACTIONSTATUS.schema';
import { PAYOUTMETHODSSchema } from '../enums/PAYOUTMETHODS.schema';
import { PurchaseHistoryCreateNestedOneWithoutBoughtInputObjectSchema } from './PurchaseHistoryCreateNestedOneWithoutBoughtInput.schema';
import { TicketCreateNestedManyWithoutTransactionInputObjectSchema } from './TicketCreateNestedManyWithoutTransactionInput.schema';
import { TicketGroupCreateNestedManyWithoutTransactionInputObjectSchema } from './TicketGroupCreateNestedManyWithoutTransactionInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TransactionCreateWithoutSellerInput> = z
  .object({
    listedPrice: z.number(),
    status: z.lazy(() => TRANSACTIONSTATUSSchema).optional(),
    total: z.number(),
    payout: z.number(),
    payoutMethod: z.lazy(() => PAYOUTMETHODSSchema),
    postedOn: z.coerce.date().optional(),
    purchasedOn: z.coerce.date().optional().nullable(),
    buyer: z
      .lazy(() => PurchaseHistoryCreateNestedOneWithoutBoughtInputObjectSchema)
      .optional(),
    tickets: z
      .lazy(() => TicketCreateNestedManyWithoutTransactionInputObjectSchema)
      .optional(),
    ticketGroups: z
      .lazy(
        () => TicketGroupCreateNestedManyWithoutTransactionInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const TransactionCreateWithoutSellerInputObjectSchema = Schema;
