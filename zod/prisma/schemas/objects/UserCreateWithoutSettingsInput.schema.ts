import { z } from 'zod';
import { ROLESchema } from '../enums/ROLE.schema';
import { VERIFICATIONSTATUSSchema } from '../enums/VERIFICATIONSTATUS.schema';
import { PaymentAccountDetailsCreateNestedOneWithoutUserInputObjectSchema } from './PaymentAccountDetailsCreateNestedOneWithoutUserInput.schema';
import { PurchaseHistoryCreateNestedOneWithoutUserInputObjectSchema } from './PurchaseHistoryCreateNestedOneWithoutUserInput.schema';
import { PersonalDetailsCreateNestedOneWithoutUserInputObjectSchema } from './PersonalDetailsCreateNestedOneWithoutUserInput.schema';
import { AccountCreateNestedManyWithoutUserInputObjectSchema } from './AccountCreateNestedManyWithoutUserInput.schema';
import { SessionCreateNestedManyWithoutUserInputObjectSchema } from './SessionCreateNestedManyWithoutUserInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserCreateWithoutSettingsInput> = z
  .object({
    email: z.string(),
    password: z.string(),
    role: z.lazy(() => ROLESchema).optional(),
    createdAt: z.coerce.date().optional(),
    IdVerified: z.lazy(() => VERIFICATIONSTATUSSchema).optional(),
    emailVerified: z.coerce.date().optional().nullable(),
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
    accounts: z
      .lazy(() => AccountCreateNestedManyWithoutUserInputObjectSchema)
      .optional(),
    sessions: z
      .lazy(() => SessionCreateNestedManyWithoutUserInputObjectSchema)
      .optional(),
  })
  .strict();

export const UserCreateWithoutSettingsInputObjectSchema = Schema;
