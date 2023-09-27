import { z } from 'zod';
import { PaymentAccountDetailsArgsObjectSchema } from './PaymentAccountDetailsArgs.schema';
import { PurchaseHistoryArgsObjectSchema } from './PurchaseHistoryArgs.schema';
import { SettingsArgsObjectSchema } from './SettingsArgs.schema';
import { AccountFindManySchema } from '../findManyAccount.schema';
import { SessionFindManySchema } from '../findManySession.schema';
import { TicketFindManySchema } from '../findManyTicket.schema';
import { UserCountOutputTypeArgsObjectSchema } from './UserCountOutputTypeArgs.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserInclude> = z
  .object({
    paymentAccount: z
      .union([z.boolean(), z.lazy(() => PaymentAccountDetailsArgsObjectSchema)])
      .optional(),
    purchaseHistory: z
      .union([z.boolean(), z.lazy(() => PurchaseHistoryArgsObjectSchema)])
      .optional(),
    settings: z
      .union([z.boolean(), z.lazy(() => SettingsArgsObjectSchema)])
      .optional(),
    accounts: z
      .union([z.boolean(), z.lazy(() => AccountFindManySchema)])
      .optional(),
    sessions: z
      .union([z.boolean(), z.lazy(() => SessionFindManySchema)])
      .optional(),
    ticketsPurchased: z
      .union([z.boolean(), z.lazy(() => TicketFindManySchema)])
      .optional(),
    ticketsSold: z
      .union([z.boolean(), z.lazy(() => TicketFindManySchema)])
      .optional(),
    _count: z
      .union([z.boolean(), z.lazy(() => UserCountOutputTypeArgsObjectSchema)])
      .optional(),
  })
  .strict();

export const UserIncludeObjectSchema = Schema;
