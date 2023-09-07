import { z } from 'zod';
import { PaymentAccountDetailsArgsObjectSchema } from './PaymentAccountDetailsArgs.schema';
import { PurchaseHistoryArgsObjectSchema } from './PurchaseHistoryArgs.schema';
import { PersonalDetailsArgsObjectSchema } from './PersonalDetailsArgs.schema';
import { SettingsArgsObjectSchema } from './SettingsArgs.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserInclude> = z
  .object({
    paymentAccount: z
      .union([z.boolean(), z.lazy(() => PaymentAccountDetailsArgsObjectSchema)])
      .optional(),
    purchaseHistory: z
      .union([z.boolean(), z.lazy(() => PurchaseHistoryArgsObjectSchema)])
      .optional(),
    personalDetails: z
      .union([z.boolean(), z.lazy(() => PersonalDetailsArgsObjectSchema)])
      .optional(),
    settings: z
      .union([z.boolean(), z.lazy(() => SettingsArgsObjectSchema)])
      .optional(),
  })
  .strict();

export const UserIncludeObjectSchema = Schema;
