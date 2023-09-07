import { z } from 'zod';
import { ROLESchema } from '../enums/ROLE.schema';
import { VERIFICATIONSTATUSSchema } from '../enums/VERIFICATIONSTATUS.schema';
import { PaymentAccountDetailsCreateNestedOneWithoutUserInputObjectSchema } from './PaymentAccountDetailsCreateNestedOneWithoutUserInput.schema';
import { PurchaseHistoryCreateNestedOneWithoutUserInputObjectSchema } from './PurchaseHistoryCreateNestedOneWithoutUserInput.schema';
import { PersonalDetailsCreateNestedOneWithoutUserInputObjectSchema } from './PersonalDetailsCreateNestedOneWithoutUserInput.schema';
import { SettingsCreateNestedOneWithoutUserInputObjectSchema } from './SettingsCreateNestedOneWithoutUserInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserCreateInput> = z
  .object({
    email: z.string(),
    password: z.string(),
    role: z.lazy(() => ROLESchema).optional(),
    createdAt: z.coerce.date().optional(),
    verified: z.lazy(() => VERIFICATIONSTATUSSchema).optional(),
    paymentAccount: z
      .lazy(
        () => PaymentAccountDetailsCreateNestedOneWithoutUserInputObjectSchema,
      )
      .optional(),
    purchaseHistory: z
      .lazy(() => PurchaseHistoryCreateNestedOneWithoutUserInputObjectSchema)
      .optional(),
    personalDetails: z
      .lazy(() => PersonalDetailsCreateNestedOneWithoutUserInputObjectSchema)
      .optional(),
    settings: z
      .lazy(() => SettingsCreateNestedOneWithoutUserInputObjectSchema)
      .optional(),
  })
  .strict();

export const UserCreateInputObjectSchema = Schema;
