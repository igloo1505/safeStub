import { z } from 'zod';
import { ROLESchema } from '../enums/ROLE.schema';
import { VERIFICATIONSTATUSSchema } from '../enums/VERIFICATIONSTATUS.schema';
import { PaymentAccountDetailsCreateNestedOneWithoutUserInputObjectSchema } from './PaymentAccountDetailsCreateNestedOneWithoutUserInput.schema';
import { PurchaseHistoryCreateNestedOneWithoutUserInputObjectSchema } from './PurchaseHistoryCreateNestedOneWithoutUserInput.schema';
import { AccountCreateNestedManyWithoutUserInputObjectSchema } from './AccountCreateNestedManyWithoutUserInput.schema';
import { SessionCreateNestedManyWithoutUserInputObjectSchema } from './SessionCreateNestedManyWithoutUserInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserCreateWithoutSettingsInput> = z
  .object({
    id: z.string().optional(),
    name: z.string().optional().nullable(),
    role: z.lazy(() => ROLESchema).optional(),
    createdAt: z.coerce.date().optional(),
    email: z.string().optional().nullable(),
    emailVerified: z.coerce.date().optional().nullable(),
    image: z.string().optional().nullable(),
    idVerified: z.lazy(() => VERIFICATIONSTATUSSchema).optional(),
    paymentAccount: z
      .lazy(
        () => PaymentAccountDetailsCreateNestedOneWithoutUserInputObjectSchema,
      )
      .optional(),
    purchaseHistory: z
      .lazy(() => PurchaseHistoryCreateNestedOneWithoutUserInputObjectSchema)
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
