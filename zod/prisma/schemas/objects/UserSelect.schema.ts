import { z } from 'zod';
import { PaymentAccountDetailsArgsObjectSchema } from './PaymentAccountDetailsArgs.schema';
import { PurchaseHistoryArgsObjectSchema } from './PurchaseHistoryArgs.schema';
import { SettingsArgsObjectSchema } from './SettingsArgs.schema';
import { AccountFindManySchema } from '../findManyAccount.schema';
import { SessionFindManySchema } from '../findManySession.schema';
import { UserCountOutputTypeArgsObjectSchema } from './UserCountOutputTypeArgs.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserSelect> = z
  .object({
    id: z.boolean().optional(),
    name: z.boolean().optional(),
    role: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    email: z.boolean().optional(),
    emailVerified: z.boolean().optional(),
    image: z.boolean().optional(),
    paymentAccount: z
      .union([z.boolean(), z.lazy(() => PaymentAccountDetailsArgsObjectSchema)])
      .optional(),
    paymentAccountDetailsId: z.boolean().optional(),
    purchaseHistory: z
      .union([z.boolean(), z.lazy(() => PurchaseHistoryArgsObjectSchema)])
      .optional(),
    idVerified: z.boolean().optional(),
    settings: z
      .union([z.boolean(), z.lazy(() => SettingsArgsObjectSchema)])
      .optional(),
    accounts: z
      .union([z.boolean(), z.lazy(() => AccountFindManySchema)])
      .optional(),
    sessions: z
      .union([z.boolean(), z.lazy(() => SessionFindManySchema)])
      .optional(),
    _count: z
      .union([z.boolean(), z.lazy(() => UserCountOutputTypeArgsObjectSchema)])
      .optional(),
  })
  .strict();

export const UserSelectObjectSchema = Schema;
